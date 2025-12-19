
// server/githubController.js
export const getGitHubData = async (req, res) => {
    try {
        const username = 'kunal-rathore-111';
        const token = process.env.GITHUB_TOKEN;

        if (!token) {
            console.error('[GitHub] No GITHUB_TOKEN configured');
            return res.status(500).json({ error: 'Server configuration error: Missing GITHUB_TOKEN' });
        }

        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GitHub API responded with ${response.status}: ${errorText}`);
        }

        const json = await response.json();

        if (json.errors) {
            throw new Error(`GraphQL Error: ${json.errors[0].message}`);
        }

        // Transform GraphQL data to match react-activity-calendar custom format
        // Expected: { total: { lastYear: N }, contributions: [{ date, count, level }] }

        const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) {
            throw new Error('No contribution calendar data found');
        }

        const contributions = [];
        calendar.weeks.forEach(week => {
            week.contributionDays.forEach(day => {
                // Map visualization level (NONE, FIRST_QUARTILE, etc) to 0-4 if needed, 
                // but react-activity-calendar usually takes count/level. 
                // The old API returned level 0-4.
                // GitHub GraphQL returns levels like "NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE".
                // We'll map them manually to be safe.

                let level = 0;
                switch (day.contributionLevel) {
                    case 'NONE': level = 0; break;
                    case 'FIRST_QUARTILE': level = 1; break;
                    case 'SECOND_QUARTILE': level = 2; break;
                    case 'THIRD_QUARTILE': level = 3; break;
                    case 'FOURTH_QUARTILE': level = 4; break;
                }

                contributions.push({
                    date: day.date,
                    count: day.contributionCount,
                    level: level // Restored level
                });
            });
        });

        const result = {
            total: {
                lastYear: calendar.totalContributions
            },
            contributions: contributions
        };

        console.log(`[GitHub Controller] Total: ${result.total.lastYear}, Weeks: ${calendar.weeks.length}, Contributions Array Length: ${contributions.length}`);
        if (contributions.length > 0) {
            console.log('[GitHub Controller] Sample contribution:', contributions[0]);
        } else {
            console.log('[GitHub Controller] WARNING: Contributions array is empty!');
        }

        res.json(result);

    } catch (error) {
        console.error('[GitHub Error]', error.message);
        res.status(500).json({ error: 'Failed to fetch GitHub data' });
    }
};

/*
About this Project:
Bring together all of the agent frameworks and create a project that has each of them contributing in some way with one agent an ADK agent running as an orchestrator.

The user comes up with a language i.e Spanish and a team/an army of agents is going to collaborate and build a functioning website with puzzles to teach and educate the user in that specified language.

The Five builders each will build a mini-game in parallel, all writting to one shared board with goals and steps underneath it

There is going to be an outer loop and inner loop. An outer loop where the orchestrator manages the big tasks/the goals and then each agent takes something off the todo list and takes care of it 

the agent architecture diagram 

                         ADK Orchestrator(decides, launches agents, judges them, repairs any bugs)
                                                 |
                                                 |(launch any agent that it can find in the other sub folders)
                                                 |
                            strands | pydantic AI | MAF | Agno | Mastra
                                                 |
                                                 |(write their progress to a shared todolist board using SQL lite)
                                                 |
                                                 |
                                       Shared SQL Lite board
                            one file, six processes, the only coordination channel
                                                 |
                                                 |
                                                 |(open each game to judge)
                                                 |
                                        Browser QA agent
                            plays each game in real Chrome via Playwright
                            
The big Idea:
The outer loop: The orchestrator can set the overall goals figure out what happens next and assign goals to the agents that each themselves run a little agent loop. This project gives us a concrete understanding of an agent loop. A loop within a loop in this case and will give us an understanding of how we can get greater capability by having these kinds of loops.

The thing to keep in mind is that the plumming that keeps everything working in these loops is just the fact that we've equiped it with a todo list tool and that's it. These things are just LLMs generating likely tokens, they dont actually know that they are in a loop. Its just that the tokens are telling them to use these tools to look at the todo list and by the nature of predicting what's most likely to come next they will infact decide to mark things off the todo list, to read the next item to take care of that. So its this almost magical thing that by giving it these tools, by putting those in the prompts to the LLM we are able to cause this behavoir that really feels agentic. It feels like each of these different agents has agency, it can be autonomous, can make decisions, do activities and then mark things complete on a todo list.

Once we've done all that we then have a browser QA agent that's going to use playwright through MCP server its gonna use it to test out the webpages and make sure that all the games run and ideally if it found a bug in one of the games it should bounce it back to the agent that built it but in this project let's gloss over that and have ADK itself fix it.

Side Note:
Now looking at this architecture of agents and having an orchestrator agent calling them one might be tempted to argue that this is a good use case for A2A. The answer is no because we are the ones managing all these agents and are in complete control. A2A would work when you have agents running on completely different and separate hardware written by different people and need to discover and communicate with each other.

Orchestrating by Code and Orchestrating through LLM 
- We've used Orchestrating by LLM here which means that it's gonna be a little bit shaky. It means we might not get the same result each time and the orchestrator might choose to run things in the wrong order and might go abit wrong. There is another way of doing this that might be more bullet proof where we can call each of these agents in turn by using a python workflow which is infact the better way but in this case we just wanted to particulary highlight the agent loop. For flexibility we should use the python workflow i.e where can call a particular agent many times and solve bigger harder problems 


*/

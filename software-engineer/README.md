This is sourced from a Medium article called [The Software Engineering Learning Plan](https://ann-lewis.medium.com/the-software-engineering-learning-plan-c4d97aedf913) by [Ann Lewis](https://annlewis.tech/)

# The Software Engineering Learning Plan Template

Here’s a list of the possible topics we include in Software Engineering Learning Plans, spanning the realms of algorithms, coding, data, databases, devops, and web architecture. We build and run highly scaled web applications at MoveOn, so this set of topics encompasses most of our work. Working collaboratively with the engineer, we pick out a list of ~10 topics for each plan, and 2–3 per quarter to focus on.

## Algorithms:
Recommended book is [Introduction to Algorithms, 3rd Edition (The MIT Press)](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844) by Thomas H. Cormen

- [ ] Big-O notation: what is it? when is it useful to know about? what are some recent examples where we had to think in terms of big-O to solve an optimization problem?
- [ ] Big-O application: think in terms of Big-O to determine how long a chunk of code will take to execute
- [ ] Big-O application: think in terms of Big-O to determine how much system memory a chunk of code will use
- [ ] Recursion, differences between iterative and recusive solutions
- [ ] Hash functions
- [ ] Memoization and in-memory caching

## Coding:

- [ ] Logical Operators
- [ ] Regular Expressions
- [ ] How to create a simple standalone script: running it, parsing user input, credential management
- [ ] Design patterns: what are they, why are they useful? Commonly used design patterns in our codebases.
- [ ] Design patterns: the Observer pattern, and examples in frontend frameworks for async updating
- [ ] Design patterns: use of the MVC, MVW, and MTV patterns in full-stack web frameworks for keeping code organized
- [ ] Commonly used data structures: hash tables / dictionaries, lists / arrays. when do we use each? what are some examples from our current systems? What are the Big-O differences between them for data storage and retrieval?
- [ ] How code uses system memory, and the scaling limits of system memory

## Data:

- [ ] Deep dive into our actively used data models
- [ ] Differences between relational and document-oriented data models, and when to use each
- [ ] Data Modeling for new projects: how does this work, why is it important to do before starting a new project, and why do we start with the data model first when planning out new projects?
- [ ] Query optimization: what do you do when someone complains that their query is running slowly? What is explain-plan and when is it useful?
- [ ] What are some big-O notation strategies for thinking about query analysis?

## Databases :

- [ ] MySQL vs Postgres: what’s the difference between these SQL dialects, and which databases use which in our system?
- [ ] The different databases we use in AWS: RDS MySQL, RDS Postgres, redis, redshift: what are the differences between them and when do we use each?
- [ ] What is the primary / secondary architectural pattern in databases in the RDS ecosystem (mysql, postgres), what is it useful for, how does this help us scale, and with which systems do we use this pattern?
- [ ] How do we think about debugging databases? What system properties, metrics, alarms do we look at and what do they tell us? (like db cpu, or number of connections)

## DevOps:

- [ ] How to figure out what’s going on with this linux box? sshing in, finding and editing the crontab, finding and tailing logs, listing running processes, checking system properties like memory and disk space used
- [ ] Command line fu: bash, aliases, ssh key mgmt, keyboard shortcuts
- [ ] Deployment systems: how does code get from our desktops or github to production? Examples of different techniques used by different systems

## Web Architecture:

- [ ] How do we think about debugging frontend code? What debuggers are used, and what information can they tell you about the running system?
- [ ] How do we think about debugging backend code? What debuggers are used, and what information can they tell you about the running system?
- [ ] Where is the line between frontend and backend in our systems? How do you know when code is executing on the frontend vs the backend?
- [ ] Synchronous vs asynchronous processing: what does it mean when we have code run synchronously in the context of a web server process vs async in some other worker process? When do we use task schedulers?
- [ ] Basics of system scaling: understanding the system resource usage and in particular the rate at which data is read and written for each category of incoming request
- [ ] Common scaling issues and how to address them: webservers running out of memory or CPU, databases running out of available connections, systems not keeping up with incoming request throughput
- [ ] How do requests get from your browser into our systems? What are all the steps, and systems a request passes through and in what order? Use debuggers to trace the path of a request from the browser all the way through one of our systems
- [ ] What are the components of the internet that a request passes through before it actually gets to the systems we manage? What is DNS? What is edge caching? Why are these systems important and how are they used?
- [ ] Load balancers: why are these important? How are they used and how do they help us scale?
- [ ] Queues: using them to smooth out write performance, how to integrate with other system components, when is it helpful to consider adding a queue into a server architecture?
- [ ] Caching: when do we use caching? What does it help with? What are some pitfalls to try and avoid?
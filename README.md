# Getting Started

1. clone the git URL by `git clone (git-url)`
2. `cd (app-name)`
3. `yarn add axios d3 react react-dom react-scripts recharts sass` or `npm install axios d3 react react-dom react-scripts recharts sass`
4. `npm start`

ReactJS Take-Home Assessment

Note: Complete this assessment within 3 business days.
We expect this assignment to take somewhere between 3 and 8 hours to complete. You are welcome to spend as much or as little time as you’d like on the assignment within the allotted time. Please focus your time building things that highlight your software development skills.

Reply to the email that sent this assessment with a ZIP File containing the contents of your project. Alternatively, you may upload your code to a public code repository with clear instructions for downloading & running your project and respond to the email with a link to your public code repository.

Assessment Overview
Use the OpenAQ-provided API to create a visualization of air quality data in your home country!

Context: Much of the work performed by Opower product front-end engineering is creating rich, compelling visualizations of new and unique data-driven insights. We want to see what you can bring to our teams to help use data to create positive social change! OpenAQ (https://openaq.org/) is a free resource that provides, via an OpenAPI specification (https://docs.openaq.org/#/), data points on air quality and is a good baseline to build visualizations on top of, and a good representation of the kind of work you will be doing on a daily basis working with our teams.

Detailed Instructions
Build a standalone ReactJS application, with a tool like Create React App or with a standalone web server, to create an application that can run locally. Using the OpenAQ API Spec:

· Start by calling the locations endpoint (note that this is the v2 endpoint that we should use… please avoid the v1 endpoint). This will gather the baseline dataset. When calling this endpoint, there should be default parameters defined by the developer (e.g. country code) as well as at least one other parameter which can be defined by the user (e.g. limit).

· Using this baseline data, the developer should choose from one of the following options to visually display this data in a comprehensible way.

1.          Display this data as plots on a map and a hover over to give a summary of the data.

2.         Display this data as informational cards or graphs that have tags, icons, or tooltips to represent the data.

In Both Options:

· Visually represent what each location is [government, research, or community]. The user should also be able to filter by this attribute.

· Display a summary of each location. The more detailed the better.

From the location screen, the user should be able to click a data point and navigate to view further measurement details of that location. The data for this can be found using the measurements endpoint (note that this is the v2 endpoint that we should use… please avoid the v1 endpoint).

· From this measurements view:

1.          The parent location data should be displayed so the user is aware of what they clicked on the previous view.

2.         Create at least two different visual representations (table, graph, chart, cards, etc.) using the measurements and parent location. The idea being to provide an intuitive way for the user to make sense of the data.

3.         Bonus: either at a page level or within one of the visual representations, build or incorporate a selection tool to filter and further analyze the data. An example of this could be to filter and display data based on measurement types for a given location.

After you’ve submitted your take-home, if you had pushed your changes to a github repo, please avoid rewriting git history of the master branch. This preserves the state of the code that’s submitted and reviewed by us.

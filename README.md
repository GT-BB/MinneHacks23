# Time2Vote

Time2Vote provides real-time updates and information on polling location wait times, empowering voters to make the trip to the polls and increasing civic engagement one vote at a time

## Inspiration
Every election season, millions of Americans line up at the polls, hoping to cast their ballot and make their voices heard. Many are successful, but a critical number are unable to do so due to voter suppression laws and crumbling election infrastructure. Long lines and unpredictable wait times at the polls often result from these issues. This primarily affects lower-income and other marginalized groups of people who are unable to take time off in order to go vote, causing them to be systematically underrepresented in government. During the last election cycle, members of our team waited in line hours at the polls and witnessed many people leave, unfortunately forfeiting their votes.

Time2Vote empowers voters by providing real-time updates on poll location wait times and enabling users to plan ahead and vote successfully.

## What it does
Time2Vote provides real-time updates and information on polling location wait times, empowering voters to make the trip to the polls and increase civic engagement one vote at a time. Time2Vote aims to encourage voter participation and increase turnout in elections, especially amongst underrepresented groups, by helping voters plan when it’s time to vote. Using computer vision to determine current poll traffic, Time2Vote enables voters to plan more effectively on Election Day, empowering them to use their voice and VOTE.

Voters are able to look up the approximate wait times for their voting precinct in real-time. The completed functioning system would consist of a camera outside the polling location, pointed at the parking lot. The current system uses a video of an active parking lot. Computer vision and machine learning are utilized to see when a car is in a parking spot and when it leaves. It then tracks the median duration of a stay at the polling location to determine the approximate wait time. To protect voter privacy, the algorithm does not track individual cars but rather if a parking spot is filled or not, and is not able to gather any information about the car itself.

## How we built it
Time2Vote is built using OpenCV, Python, Express.JS, Javascript, React. JS, HTML, CSS, Javascript, and Bootstrap.

Our algorithm utilizes OpenCV and Python to track whether a spot is filled and to calculate the wait time. First, each frame is blurred and converted to greyscale. Then, cvtColor identifies everything that is asphalt and makes those pixels black, and the remaining pixels white. When a car enters a parking spot, more white pixels exist within the boundaries of the parking space and our algorithm detects a car. When the car leaves, the number of white pixels drops, and our algorithm detects an empty spot once again. We can then calculate the duration of the spot being filled, which is then used to determine the median duration a car will be in the spot and thus the approximate wait time. It then delivers the current wait time information to our web server back-end via a .json file. The Python script constantly monitors the parking lot and updates this time information in real time with the help of an Express API.

The front end was built with React.JS and Bootstrap (HTML and CSS). The user interface was designed for a simple and seamless user experience, helping decrease voter stress on Election Day.

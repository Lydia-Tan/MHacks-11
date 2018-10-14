## Inspiration
Although applicable in many other situations, this web app was designed with the purpose of aiding stroke survivors in their journey towards recovery. My grandmother suffered three ischemic strokes, of which one caused lasting paralysis of her left arm and leg and speech aphasia. For three years, we visited her every weekend in the hospital, bringing her favorite soy sauce marinated pork chops and sharing the "trials and tribulations" of high school - just like we would do before her stroke. But our interactions with her were limited and she was unable to communicate with us and sadly, with time, my grandmother just became sicker and sicker. One Friday, while on the phone with my grandfather, I heard the alarms of my grandmother vital monitors and frantic yells. Then, I heard the distinctive, drawn out alarm that told me that my grandmother was no longer with us. Being at MHacks provided us the opportunity to work on an application that could have helped stroke patients like my grandmother who had limited mobility and difficulty with speaking to be able to communicate and connect with their loved one's and effectively convey their own personal medical needs. Through this web app, we hope to help other grandmas, grandpas, moms, dads, sisters, or brothers to be able to more fulfilling lives post-stroke without being hindered by the long-term effects of a stroke. 

## What it does
Vitamin See implements Computer Vision (via the webcam) and Machine Learning to allow patients to communicate with only their eyes. With Vitamin See, patients use their eyes to select and build messages which they can then send to their loved ones, their caregivers, or their healthcare professional team. While designed for severe stroke patients, Vitamin See has many more potential uses and can help a multitude of different audiences. From providing ALS patients like Stephen Hawkins with a more convenient mode of communication to improving the productivity of the millions of computer scientists world-wide, Vitamin See aids to better the lives of all users by helping to provide and restore a voice to those without one.

## How I built it
We built Vitamin See with Ruby-on-Rails, HTML, CSS, and Javascript. In addition, we used Google Firebase to provide authentication features that will allow personalization of each user's web environment. The computer vision and machine learning aspects of Vitamin See were built with WebGazer's API, an eye tracking library that turns ordinary webcams into extraordinary predictive engines that can precisely and accurately infer the pupil positions of a user in real time.

## Challenges I ran into
One of the challenges we ran into was our struggle with implementing the various different API's used as well as managing and breaking down each feature and aspect of the application. We wanted to ensure that those entering our web application would be met with an easy-to-use interface and so designing an application that would require the least "hands-on" (literally) experience was one of our challenges. Furthermore, creating the algorithms to analyze and process the eye movements and positions in order to trigger an event to occur was also one of our primary struggles. In fact, this was our largest project we have worked thus far in our journey through computer science. 

## Accomplishments that I'm proud of
We are really proud of being able to overcome a variety of both technical and practical challenges. Utilizing both logic and creativity, our teamwork and organization and management allowed for us to create well-developed plans and a productive breakdown of each of the parts and features to work on. It was each of our unique contributions which allowed us to tackle our hardest challenges and come together to form solutions.  

## What I learned
Maxwell: Personally, I learned how to program in Ruby-on-Rails, HTML, CSS as Vision See was the very first web application I had made. 

Marco: I learned how to use the WebGazer library and integrate computer vision into the application to allow for users to build sentences and communicate solely with their eyes.  

Linda: With my focus on the front-end development of the project, I learned signifcantly more about developing a UI interface that is both visually appealing and easy for people like stroke patients to use. 

Lydia: This hackathon, I focused much more on the backend development of the web application and so I learned more about how to integrate the different API's and use algorithms to calculate the position of the eye at different time intervals.  

## What's next for Vitamin See
Two currently planned next steps are: 
1. Connect the web application so that sent messages can be sent to the care givers' cell phone.
2. Implement AI and Natural Language Processing algorithms to be able to predict which words/pictures will likely be used next.
3. Provide users with a broader and larger vocab selection to build their sentences upon and better express themselves. 

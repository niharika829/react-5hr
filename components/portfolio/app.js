import React, { Component } from 'react';
import Typical from 'react-typical';
import NavBar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './projects.js';
import Contact from './contact.js';
import Cake2 from './images/cake2.jpg';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import NotFound from './notfound.js';
const App = () => {
	const Skills = [
		{ id: 1, name: 'html', percentage: '90' },
		{ id: 2, name: 'javascript', percentage: '80' },
		{ id: 3, name: 'bootstrap', percentage: '90' },
		{ id: 4, name: 'react', percentage: '75' },
		{ id: 5, name: 'php', percentage: '87' },
		{ id: 6, name: 'laravel', percentage: '75' },
	];

	const Posts = [
		{
			id: 1,
			name: 'HOLIDAY CALENDAR',
			technology: ' REACT , BOOTSTRAP , API CALLING',
			timeline: 'Jul 2019-Aug 2019',
			img: Cake2,
			about:
				'Main aim of the project was to fetch holidays list of a specific country through ajax calls and display it on the platform.',
		},
		{
			id: 2,
			name: 'BLOGGING WEBSITE',
			technology: 'HTML , CSS , JAVASCRIPT',
			timeline: 'May 2019-jun 2019',
			img: Cake2,
			about:
				'a user can register themselves and can create new blogs and posts. they edit and delete the blogs as well. One can like and comment on other’s blogs too.',
		},
		{
			id: 3,
			name: 'RANDOM DOG IMAGES RENDERING',
			technology: 'BOOTSTRAP , AJAX CALLS',
			timeline: 'May 2019-jun 2019',
			img: Cake2,
			about: 'It renders random images of dogs on the click of button.',
		},
		{
			id: 4,
			name: 'HOTEL WEBSITE(THE PATNITOP INN)',
			technology: ' HTML , CSS , JAVASCRIPT , JQUERY , BOOTSTRAP ',
			timeline: 'SEP 2019-DEC 2019',
			img: Cake2,
			about: 'A user can make booking for linens and dining ,and can also ask for personalized facilities .',
		},
		{
			id: 5,
			name: 'NASA IMAGE GENERATOR',
			technology: 'BOOTSTRAP , AJAX CALLS',
			timeline: 'Jul 2019',
			img: Cake2,
			about: 'It renders “THE PIC OF THE DAY” image from nasa api  and top five pictures captured by satelllite.',
		},
		{
			id: 6,
			name: 'HOTEL  MANAGEMENT WEBSITE(HILLCREST)',
			technology: ' HTML , CSS , JAVASCRIPT , JQUERY , BOOTSTRAP',
			timeline: 'AUG 2019-NOV 2019',
			img: Cake2,
			about: 'A user can make booking for linens and dining ,and can also ask for personalized facilities . ',
		},
		{
			id: 7,
			name: 'SALON MANAGEMENT WEBSITE(Onward)',
			technology: ' BOOTSTRAP , PHP , SQL , LARAVEL',
			timeline: 'MAR 2020 – APR 2020',
			img: Cake2,
			about: 'user can make an indoor and outdoor appointment at their suitable timings .',
		},
		{
			id: 8,
			name: 'RECRUITING PORTAL(JobGlobe)',
			technology: ' REACT , BOOTSTRAP ',
			timeline: 'JUN 2020',
			img: Cake2,
			about:
				'one can look though the live jobs, can either accept it by storing it in the accepting list or can reject it by storing the rejected jobs in the reject list.',
		},
		{
			id: 9,
			name: 'TASK TRACKER(Excer Task Tracker)',
			technology: ' MONGODB Atlas , EXPRESS JS , REACT , NODE JS',
			timeline: 'JUL 2020',
			img: Cake2,
			about: 'one can create new task . A timer will show the time left to complete a particular task. ',
		},
		{
			id: 10,
			name: 'SPOTIFY LIST(MUSICOPHILE)',
			technology: ' SPOTIFY API , React ',
			timeline: 'JUN 2020',
			img: Cake2,
			about: 'a user can search for songs ,they can  listen to the song and also add them to their list. ',
		},
		{
			id: 11,
			name: 'TODO APP ',
			technology: ' REACT ',
			timeline: 'AUG 2020',
			img: Cake2,
			about:
				'a user can type the task in the input field ,one can verify the completed task and delete the one they wish.',
		},
		{
			id: 12,
			name: 'SHOPPING LIST MANAGER',
			technology: ' REACT , BOOTSTRAP ',
			timeline: 'AUG 2020',
			img: Cake2,
			about:
				'a user can add as well decrease the amount of particular category in their shopping list . one can reset their choices as well',
		},
		{
			id: 13,
			name: 'MEME GENERATOR',
			technology: ' REACT , BOOTSTRAP , API CALLING',
			timeline: 'AUG 2020',
			img: Cake2,
			about:
				'An API call will fetch an image , a user can write whatever text they wish to and can create a MEME of their own . ',
		},
	];

	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/portfolio" exact component={Home} />
					<Route
						path="/projects"
						render={(props) => <Projects {...props} title={Posts} skillset={Skills} />}
					/>
					<Route path="/contactMe" component={Contact} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
};
const Home = () => {
	const { width, height } = useWindowSize();
	return (
		<div className="portfolio-container">
			<Confetti width={width} height={height} />

			<Typical
				className="intro"
				steps={[
					'hey there you found me',
					1000,
					'my name is niharika sharma',
					1000,
					'web development is my passion',
					1000,
					'i love to convert client`s ideas into interactive yet responsive webpages',
					1000,
					'have a look at my work ...do appreciate it!!!',
					1000,
					'connect with me through linked in',
					1000,
					'email me your thoughts...lets work together!!!',
					1000,
				]}
				loop={Infinity}
			/>
		</div>
	);
};
export default App;

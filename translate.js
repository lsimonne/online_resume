var theme = {
	mainColor: "#43D1AF",
	bgColor: "#F7F7F7",
	buttonColor: "rgb(230, 230, 230)",
	borderStyle: "solid 2px black"
};

const DEFAULT_LANG = "fr";

const PDF_RESUME = {
	en: "dl/Louise\ Simonneau_CV_EN2017.pdf",
	fr: "dl/Louise\ Simonneau_CV_FR2017.pdf"
};

var dict = {
		tooltips: {
			skillsNav: {en: "Skills", fr: "Comp\xE9tences"},
			edNav: {en: "Education", fr: "Formation"},
			hobsNav: {en: "Hobbies", fr: "Divers"},
			expNav: {en: "Experience", fr: "Exp\xE9rience"},
		},
		downButton: {en: "DOWNLOAD MY RESUME", fr: "T\xC9L\xC9CHARGER MON CV"},
		jobDescr: {en: "", fr: "Développeuse en herbe"},
		moocsTitle: {en: "ONLINE EDUCATION", fr: "FORMATION EN LIGNE"},
		edTitle: {en: "EDUCATION", fr: "FORMATION"},
		skillsTitle: {en: "SKILLS", fr: "COMP\xC9TENCES"},
		programming: {en: "Programming", fr: "Programmation"},
		tools: {en: "Tools", fr: "Outils"},
		unix: {en: "UNIX Environment", fr: "Environnement UNIX"},
		lang: {en: "Languages", fr: "Langues"},
		french: {en: "French - mother tongue", fr: ""},
		english: {en: "English - fluent, spoken and written", fr: "Anglais courant"},
		sp: {en: "Spanish - intermeditate", fr: "Espagnol scolaire"},
		compAdj: {en: "Fast learner, adaptable, independent, meticulous", fr: "Adaptabilit\xE9, rapidit\xE9 d'apprentissage, rigueur, autonomie"},
		expTitle: {en: "WORK AND ASSOCIATIVE EXPERIENCE", fr: "EXP\xC9RIENCE PROFESSIONNELLE ET ASSOCIATIVE"},
		london: {en: "London (UK)", fr: "Londres (RU)"},
		ireland: {en: "Ireland", fr: "Irlande"},
		since: {en: "since", fr: "depuis"},
		months: {
			jan: {en: "January", fr: "janvier"},
			feb: {en: "February", fr: "f\xE9vrier"},
			march: {en: "March", fr: "mars"},
			apr: {en: "April", fr: "avril"},
			may: {en: "May", fr: "mai"},
			june: {en: "June", fr: "juin"},
			jul: {en: "July", fr: "juillet"},
			aug: {en: "August", fr: "ao\xFBt"},
			sept: {en: "September", fr: "septembre"},
			oct: {en: "October", fr: "octobre"},
			nov: {en: "November", fr: "novembre"},
			dec: {en: "December", fr: "d\xE9cembre"},
		},
		titleAgile: {en: "Software Processes and Agile Practices, University of Alberta",
					fr: "\"Software Processes and Agile Practices\", Universit\xE9 d'Alberta"},
		descrAgile: {en: "", fr: ""},
		titleJava: {en: "", 
					fr: "Initiation \xE0 la programmation \n Introduction &agrave la programmation orient&eacutee objet en Java, \xC9cole Polytechnique de Lausanne"},
		descrJava: {en: "", fr: ""},
		descr42: { en: "42 is a coding school based on peer-learning: no classes, no teachers, a totally project-oriented programme. " +
					"Throughout this course, I acquired the basics of computer programming " +
					"(in C, PHP, HTLM, CSS, Javascript), as well as good coding practices " +
					"(clean code, unit testing) and useful tools (UNIX working environment, Git), " +
					"in a very short time. I also developed my abilities to adapt and learn quickly, during the selection (C) and training (PHP) \"piscines\" " +
					"(\"pools\", month long intensive courses).", 
					fr: "42 est une \xE9cole de programmation informatique bas\xE9e " +
					"sur le peer-learning: pas de cours, pas de professeurs, un cursus 100% pratique et projet. " +
					"Cette formation m'a permis d'acqu\xE9rir les notions fondamentales de la programmation " +
					"(en C, PHP, HTLM, CSS, Javascript), ainsi que d'en conna\xEEtre les bonnes pratiques " +
					"(clean code, tests unitaires) et les outils essentiels (environnement UNIX, Git), " +
					"et ce en tr\xE8s peu de temps. J'y ai \xE9galement d\xE9velopp\xE9 mes capacit\xE9s " +
					"d'adaptabilit\xE9 et d'apprentissage rapide, \xE0 travers les piscines " +
					"(un mois de formation intensive) de s\xE9lection en C, et de formation en PHP."},
		titleMelex: {en: "Master 1 M\xE9tiers du Lexique et de la Traduction", fr: "Master 1 M\xE9tiers du Lexique et de la Traduction"},
		descrMelex: {en: "", fr: ""},
		titleLea: {en: "Degree in LEA (Translation studies)", 
					fr: "Licence Langues \xC9trang\xE8res Appliqu\xE9es, parcours Traduction Sp\xE9cialis\xE9e Multilingue"},
		descrLea: {en: "Throughout this course, I broadened my knowledge of the English language and culture.", 
					fr: "Cette ann\xE9e m'a permis d'approfondir ma connaissance de la langue et de la culture anglaises."},
		titleCine: {en: "Degree in film studies", fr: "Licence Arts, parcours \xC9tudes cin\xE9matographiques"},
		descrCine: {en: "With this theoretical course, I was introduced to the cultural and artistic world" +
					" through the history and aesthetics of cinema, and its connections to other arts as well as" +
					"  to the world in general and to social sciences.",
					fr: "Cette formation theorique m'a permis de m'ouvrir au monde de l'art et de la culture, " +
					"\xE0 travers l'histoire et l'esth\xE9tique du cin\xE9ma, et les relations qu'il entretient aussi bien avec" +
					" les autres formes artistiques, qu'avec le monde en g\xE9n\xE9ral, donc les sciences humaines."},
		titleMed: {en: "PCEM 1 (1st year of medical studies)", fr: "Premier Cycle des \xC9tudes M\xE9dicales 1"},
		titleBac: {en: "Scientific Baccalaur\xE9at, with Highest Honours", 
					fr: "Baccalaur\xE9at Scientifique, sp\xE9cialit\xE9 Math\xE9matiques, mention Tr\xE8s Bien"},
		titleKiron: {en: "Volunteer - Computer Science Curriculum equivalence analysis", 
					fr: "B\xE9n\xE9vole, analyse d'\xE9quivalences de formations en Informatique"},
		descrKiron: {en: "Kiron France is an NGO that offers a hybrid education system aimed at helping refugees " +
					"and asylum seekers access higher education. " +
					"After a year of learning online through MOOCs, Kiron students " +
					"are transfered to the second year of one of Kiron's partner Universities " +
					"As a volunteer at Kiron France, my role was to match Kiron Computer Science modules " +
					"with partner universities modules.", 
					fr: "Kiron France est une association qui vise \xE0 faciliter l'acc\xE8s \xE0 l'\xE9ducation sup\xE9rieure aux " +
					"personnes r\xE9fugi\xE9es et aux demandeurs d'asile, \xE0 travers un syst\xE8me hybride de formation. " +
					"L'\xE9tudiant r\xE9alise la premi\xE8re \xE9tape de son cursus en ligne via des MOOCs, " +
					"et int\xE8gre ensuite l’une de nos universite\xE9s partenaires directement en Licence " +
					"gr\xE2ce \xE0 l’accre\xE9ditation de leur formation. " +
					"Mon r\xF4le au sein de Kiron France est de trouver des \xE9quivalences de " +
					"modules entre les formations de nos universit\xE9s partenaires et le cursus Informatique Kiron."},
		titleCes: {en: "Receptionist", fr: "R\xE9ceptionniste"},
		descrCes: {en: "", fr: ""},
		titleTrans: {en: "Project Management Intern", fr: "Stagiaire en gestion de projet de traduction"},
		descrTrans: {en: "My tasks in this multinational translation company were to prepare documents for translating " +
					"(Office Suite), and be the last reviewer.",
					fr: "Au sein de cette entreprise multinationale de services de traduction, mes t\xE2ches consistaient \xE0 " +
					"pr\xE9parer les documents pour la traduction (suite Office), et \xE0 en faire la relecture finale."},
		titleSpeedb: {en: "General assistant", fr: "Standardiste"},
		descrSpeedb: {en: "", fr: ""},
		titleStoneh: {en: "Bed & Breakfast employee", fr: "Employ\xE9e de Bed & Breakfast"},
		descrStoneh: {en: "", fr: ""},
		titleHoriz: {en: "Work placement coordinator for French students", fr: "Coordinatrice de stages pour des lyc\xE9ens fran\xC7ais"},
		descrHoriz: {en: "", fr: ""},
		hobbiesTitle: {en: "HOBBIES", fr: "CENTRES D'INT\xC9R\xCAT"},
		hikingText: {en: "hiking", fr: "randonn\xE9e"},
		travelsText: {en: "travelling", fr: "voyages"},
		musicText: {en: "music (guitar)", fr: "musique (guitare)"},
		readingText: {en: "reading", fr: "lecture"}
};

function canAccessStorage() {
    try {
        localStorage.setItem("__test", "data");
    } catch (e) {
        return false;
    }
    return true;
}

function changeText(element, text) {
	if (element) {
		var textNode = document.createTextNode(text);
		if (element.childNodes.length !== 0){
			element.removeChild(element.childNodes[0]);
		}
		element.appendChild(textNode);
	}
}

function translate(lang) {
	var ref;
	var el;
	var text;

	for (ref in dict) {
		el = document.getElementById(ref);
		changeText(el, dict[ref][lang]);
	}
	for (ref in dict.tooltips) {
		el = document.getElementById(ref);
		text = dict["tooltips"][ref][lang];
		if (el) {
			el.setAttribute("data-original-title", text);
		}
	}
	for (ref in dict["months"]) {
		var elements = document.getElementsByClassName(ref);
		if (elements) {
			text = dict.months[ref][lang];
			for (i = 0; i < elements.length; i++) {
				changeText(elements[i], text);			
			}
		}
	}
}

function setLang(lang) {
	var en = document.getElementById("en");
	var fr = document.getElementById("fr");
	var download = document.getElementById("downButton");

	switch (lang) {
		case "en":
			translate("en");
			fr.style.border = "none";
			en.style.border = theme.borderStyle;
			en.style.fontWeight = "bolder";
			download.setAttribute("href", PDF_RESUME.en);
			$("#sm_down_button").attr("href", PDF_RESUME.en);
			break ;
		case "fr":
			translate("fr");
			en.style.border = "none";
			fr.style.border = theme.borderStyle;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", PDF_RESUME.fr);
			$("#sm_down_button").attr("href", PDF_RESUME.fr);
			break ;
		default:
			translate("fr");
			en.style.border = "none";
			fr.style.border = theme.borderStyle;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", PDF_RESUME.fr);
			$("#sm_down_button").attr("href", PDF_RESUME.fr);
	}
}

function changeLang(lang) {
	var langEl = document.getElementById(lang);

	if (langEl.style.border !== "solid 2px black")
	{
		setLang(lang);
		if (canAccessStorage()) {
			window.localStorage.setItem("lang", lang);
		}
	}
}

window.onload = function () {
	if (canAccessStorage()) {
		setLang(window.localStorage.getItem("lang"));
	}
	else {
		setLang(DEFAULT_LANG);
	}
	document.getElementById("en").addEventListener("click", function() {
		changeLang("en");
	});
	document.getElementById("fr").addEventListener("click", function() {
		changeLang("fr");
	});
};

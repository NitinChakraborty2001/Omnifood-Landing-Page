/*
	🖥️ Full-Stack Developer 🎨 Graphic Designer 💸 Freelancer
	-----------------------------------------------------------
	👨‍💻 Author : Nitin Chakraborty.
	-------------------------------
	🔗 Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗 Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗 YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗 LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗 Twitter : https://www.twitter.com/NitinCB2001/
	--------------------------------------------------
	📧 eMail : nitin.chakraborty13@gmail.com
*/

// Set Current Year
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Make Mobile Navigation Work
const mobileNavigationButtonElement = document.querySelector(".button-mobile-navigation");
const headerElement = document.querySelector(".header");

mobileNavigationButtonElement.addEventListener("click", function () {
	headerElement.classList.toggle("navigation-open");
});

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (event) {
		event.preventDefault();
		const hypertextReference = link.getAttribute("href");

		// Scroll Back To Top
		if (hypertextReference === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		// Scroll To Other Links
		if (hypertextReference !== "#" && hypertextReference.startsWith("#")) {
			const sectionElement = document.querySelector(hypertextReference);
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}

		// Close Mobile Navigation
		if (link.classList.contains("main-navigation-link"))
			headerElement.classList.toggle("navigation-open");
	});
});

// Sticky Navigation
const heroSectionElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
	function (entries) {
		const entry = entries[0];
		// Intersection Observer Entry
		console.log(entry);

		if (entry.isIntersecting === false) {
			document.body.classList.add("sticky");
		}

		if (entry.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In The Viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
observer.observe(heroSectionElement);

// Fixing FlexBox Gap Property Missing In Some Safari Versions
function checkFlexboxGap() {
	// Create Flex Container
	var flexBox = document.createElement("div");
	flexBox.style.display = "flex";
	flexBox.style.flexDirection = "column";
	flexBox.style.rowGap = "1px";

	// Create Two Elements Inside It
	flexBox.appendChild(document.createElement("div"));
	flexBox.appendChild(document.createElement("div"));

	// Append To The Document Object Model
	document.body.appendChild(flexBox);

	// If The Container's Height Is Equal To 1 Pixel, FlexBox Gap Is Supported.
	var isSupported = flexBox.scrollHeight === 1;
	flexBox.parentNode.removeChild(flexBox);

	// console.log(isSupported);
	console.log(`FlexBox Gap Is Supported : ${isSupported}.`);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexboxGap();

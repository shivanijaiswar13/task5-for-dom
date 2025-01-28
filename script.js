//Selecting the Element
	// 1.	Write a function to select a <div> with the ID container and log it to the console.
    // function ID(){
    //     const div = document.querySelector("#container");
    //     console.log(div);
    // }
    // ID();


    //2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.

    // function unordered(){
    //     const list= document.querySelectorAll(".menu li");
    //     const li = Array.from(list).map(li => li.textContent);
    //     console.log(li)

    // }
    // unordered();

//-----------------------------------------------------------------------------------------------------------------------

//3.	Write code to select the first <h1> element on a webpage and change its color to blue.
// function firstelem(){
//     const h1 = document.querySelector("h1");
//     h1.style.color = "blue";
// }
// firstelem();
//-----------------------------------------------------------------------------------------------------------------------

//4.	Select the element with the class card and add a border to it using JavaScript.
// const card = document.querySelector(".card");
// card.style.border = "2px solid black";
//------------------------------------------------------------------------------------------------------------------------

//5.	Write a function to log all elements with the tag name button to the console.
// function btnelem(){
//     const btn = document.querySelectorAll("button");
//     console.log(btn);
// }
// btnelem();
//------------------------------------------------------------------------------------------------------------------------------


//Changing the Text in JS
	// 6.	Select a <p> element with the class description and change its text to "Updated description".
    // const para =document.querySelector(".description");
    // para.className = ".updated description";
    // console.log(para);

    //7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
    // function heading(){
    //     const h1= document.querySelector("#heading");
    //     h1.textContent = "hello, world!";
    //     console.log(h1);
    // }
    // heading();

//8.	Select a button with the ID submit and set its text to "Submit Form".

// function btntxt(){
//     const btn = document.querySelector("#btn");
//     btn.textContent = "submit form";
//     console.log(btn);
// }
// btntxt();

//9.	Replace the text inside a <span> element with the class price to "₹499".
// function spntxt(){
//     const span = document.querySelector(".price");
//     span.textContent = "₹499";
//     console.log(span);
// }
// spntxt();

//10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
// function h2elem(){
//     const head = document.querySelectorAll("h2");
//     head.forEach(h2element => {
//         h2element.textContent = "welcome to my page";
//     });
    
// }
// h2elem();


//Changing the HTML in JS
	// 11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.
        // const div = document.getElementById("#content");
        // const h2 = document.createElement("h2");
        // const p = document.createElement("p");
        // h2.innerHTML = "hello javascript";
        // p.innerHTML = "java script is a programming language."

        // div.innerHTML = ' ';
        // div.appendChild(h2);
        // div.appendChild(p);
        
        // console.log(div);
    //-------------------------------------------------------------
        // const div = document.querySelector("#content");
        // div.innerHTML = "<h2>Hello</h2><p>how are u everyone?</p>"


    //12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.

// function idelem(){
//     const div = document.querySelector("#element");
//     div.innerHTML = "<button>click me!</button>";
//     // console.log(div);
// }
// idelem();

//13.	Select an element with the class info and append a <strong> tag with the text "Important" inside it.
// let div  = document.querySelector(".info");
// let strong = document.querySelector("strong");
// strong.textContent = "Important";


//14.	Replace the content of a <div> with ID main with an unordered list containing three <li> items.
// let div = document.querySelector("#main");
// div.innerHTML = "<ul><li>keyboard</li><li>mouse</li><li>dekstop</li></ul>"


//15.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.
// function elem(){
//     let div = document.querySelector("#image");
//     div.innerHTML = `<img src = "image1.jpg">`;
// }
// elem();

//Changing the CSS via JS
	// 16.	Select a <div> with the class box and change its background color to red.
    // let div = document.querySelector(".box");
    // div.style.backgroundColor = "red";

//17.	Write a function that takes an element ID and sets its font size to 20px.

// function elem(h5){
//     let h5 = document.querySelector("#element");
//     if(h5){
//         h5
//     }
// }
// elem(h5);

//18.	Select all <h1> elements and change their text color to green.
// function elem(){
//     let h1 = document.querySelectorAll("h1");
//     h1.forEach((h1) =>{
//         h1.style.color = "green";
//     })
// }
// elem();


//19.	Change the display property of an element with the class hidden to block.






//20.	Write a function that toggles the visibility of an element (hide/show) when called.






//Adding/Removing Event Listeners
	// 21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.

        // let button = document.querySelector("#login");
        // button.addEventListener("click",() => {
        //     console.log("button clicked!");
        // });

    //22.	Write a function to remove a mouseover event listener from an element with the class hoverable.
            








    //23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.

            // let button = document.querySelector("#signup");
            // button.addEventListener("click",() =>{
            //     button.textContent = "submission";
            // })

    //24.	Attach a keydown event listener to the document and log the key pressed to the console.

                // document.addEventListener("keydown", (event)=>{
                //     console.log(`key pressed : ${event.key}`)
                // });



    //25.	Write a function that adds a click event listener to all buttons on the page and 
    // changes their background to yellow when clicked.

    // function clicked(){
    //     let btn = document.querySelectorAll("button");
    //     btn.forEach(element => {
    //         element.addEventListener("click", () =>{
    //             element.style.backgroundColor = "yellow";
    //         })
        
    //     });

    // }
    // clicked();


    //Adding/Removing Classes to HTML Elements
	// 26.	Add a class highlight to all <p> elements with the class paragraph.
            // let para = document.querySelector("p");
            // para.classList.add("highlight");

    //27.	Write a function to toggle the class active on an element when clicked.
        // let btns = document.querySelectorAll("#button");
        // function toggles(){
        //     btns.forEach(elem => {
        //         elem.addEventListener("click", ()=>{
        //             elem.classList.toggle("active");
        //         })
                
        //     });
        // }
        // toggles();


    // //28.	Remove the class hidden from a <div> with the ID popup.
    //     let div = document.querySelector("#popup");
    //     // div.removeAttribute("class");
    //     div.classList.remove("hidden");

    


    //29.	Add a class selected to all <li> elements inside a <ul> with the class list.
            // const li = document.querySelectorAll("ul.list li");
            // li.forEach(element => {
            //     element.classList.add('selected');

            // });
    //30.	Write a function that removes the class disabled from a button with the ID submit.
            // function submission(){
            //     const btn = document.querySelector("#submit");
            //     btn.classList.remove("disabled");
            // }
            // submission();



    //Adding/Removing IDs to HTML Elements
	// 31.	Write code to add the ID featured to a <div> with the class hero.
            // const div = document.querySelector(".hero");
            // div.id = "featured";

    //32.	Remove the ID old-id from an element and add a new ID new-id to it.
    // const div = document.querySelector("#old-id");
    
    // div.id = "new-id";

    //33.	Write a function that sets a unique ID to each <li> in an ordered list.
            // function ordered(){
            //     const list = document.querySelectorAll("li");
            //     list.forEach((element, index) => {
            //         element.id = 'list' + (index+1);
            //     });

            // }
            // ordered();
            

    //34.	Add an ID header-main to the first <h1> element on the page.
            // const heading = document.querySelector("h1");
            // heading.id = "header-main";
    
    //35.	Remove the ID from an element with the class removable.
            // const div = document.querySelector(".removable");
            // div.removeAttribute("id");


    //Adding/Removing Attributes to HTML Elements
	// 36.	Add a src attribute with the value "image.jpg" to an <img> element with the ID thumbnail.
            // const image = document.querySelector("#thumbnail");
            // image.src ="image1.jpg";


    //37.	Remove the disabled attribute from a button with the class enable-button.
            // const button = document.querySelector(".enable-button");
            // button.removeAttribute("disabled");


    //38.	Write a function to set a data-user-id attribute with the value "12345" to
    //      a <div> with the class profile.
            // function profile(){
            //     const div = document.querySelector(".profile");
            //     div.setAttribute("data-user-id","12345");

            // }
            // profile();


    //39.	Select a <a> tag and add a target="_blank" attribute to open the link in a new tab.
            // const anchor = document.querySelector("a");
            // anchor.setAttribute("target","_blank");

    //40.	Remove the required attribute from all <input> elements inside a form with the ID registration.
            // const form = document.querySelectorAll("#registration input");
            // form.forEach(element => {
            //     element.removeAttribute("required");
                
            // });

    //Combining Multiple Topics

// 41.	Write a function to add an event listener to all buttons, and when clicked, toggle the class active on them.
        // function active(){
        //     const btn = document.querySelectorAll("button");
        //     btn.forEach(element => {
        //         element.addEventListener("click",()=>{
        //             element.classList.toggle("active");
        //         })
        //     });
        // }
        // active();


//42.	Create a function to select a <div> by ID, add a class selected, change its text to "Hello", 
//      and set its background color to yellow.
        // function properties(){
        //     const div = document.querySelector("#main");
        //     div.classList.add("selected");
        //     div.textContent = "Hello";
        //     div.style.backgroundColor = "yellow";
        // }
        // properties();
        

//43.	Add a click event listener to all <li> elements inside a <ul> that logs the text content of the clicked item.
            




	// 44.	Write a function to add a new <p> element inside a <div> with the ID content and set its
    //      text to "New Paragraph".


	// 45.	Add a mouseover event listener to an <img> that changes its src attribute to "hover.jpg".


    //Real-Life Scenarios
	// 46.	Write a function that creates a to-do list by appending <li> elements dynamically 
    //      inside a <ul> with the ID todo-list.


	// 47.	Create a function that validates an email input field by adding/removing a class error
    //      based on the input value.


	// 48.	Write code to create a modal popup by adding a new <div> with some content and 
    //      a close button when a button is clicked.


	// 49.	Build a function that changes the theme of a webpage (light/dark mode) by toggling 
    //      classes on the <body> element.


    
	// 50.	Create a dropdown menu where clicking an item highlights it and logs its text to the console.
const lab7 = document.createElement("h1");
lab7.textContent = "Lab7 Assignment";
lab7.style.color = "blue";

document.body.appendChild(lab7);
document.body.appendChild(document.createElement("hr"));

const task = document.createElement("h2");
task.textContent = "Task";
task.setAttribute("style", "color: red;");

document.body.appendChild(task);

const paragraph1 = document.createElement("p");
paragraph1.innerHTML =
  "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";

document.body.appendChild(paragraph1);

const list1 = document.createElement("ul");

list1.innerHTML =
  '<li class="even" style="color: green">find elements in the DOM (<b>5 points</b>);</li><li class="odd" style="color: purple">create/add/remove elements (<b>5 points</b>);</li><li class="even" style="color: green">change content of the elements (<b>5 points</b>);</li><li class="odd" style="color: purple">change styles of the elements (<b>5 points</b>);</li><li class="even" style="color: green">change attributes of the elements (<b>5 points</b>);</li><li class="odd" style="color: purple">change classes of the elements (<b>5 points</b>).</li>';

document.body.appendChild(list1);

document.body.appendChild(document.createElement("hr"));

const submission = document.createElement("h2");
submission.textContent = "Submission";
submission.setAttribute("style", "color: red;");

document.body.appendChild(submission);

const paragraph2 = document.createElement("p");
paragraph2.innerHTML = "To submit your work, follow these instructions:";

document.body.appendChild(paragraph2);

const list2 = document.createElement("ul");

const first = document.createElement("li");
first.classList.add("even");
first.style.color = "green";
first.innerHTML =
  "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";

const second = document.createElement("li");
second.classList.add("odd");
second.style.color = "purple";
second.innerHTML =
  "Clone this repository to your local machine and work inside it.";

const third = document.createElement("li");
third.classList.add("even");
third.style.color = "green";
third.innerHTML =
  'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';

const fourth = document.createElement("li");
fourth.classList.add("odd");
fourth.style.color = "purple";
fourth.innerHTML =
  "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";

const fifth = document.createElement("li");
fifth.classList.add("even");
fifth.style.color = "green";
fifth.innerHTML =
  "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";

const sixth = document.createElement("li");
sixth.classList.add("odd");
sixth.style.color = "purple";
sixth.innerHTML =
  "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";

const seventh = document.createElement("li");
seventh.classList.add("even");
seventh.style.color = "green";
seventh.innerHTML =
  "After you finish your work, submit it to the Github (<b>2 points</b>).";

list2.appendChild(first);
list2.appendChild(second);
list2.appendChild(third);
list2.appendChild(fourth);
list2.appendChild(fifth);
list2.appendChild(sixth);
list2.appendChild(seventh);

document.body.appendChild(list2);
document.body.appendChild(document.createElement("hr"));

document.body.getElementsByTagName("h1")[0].remove();

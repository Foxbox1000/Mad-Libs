<html>
  <head>
    <script src="database.js"></script>
    <style>
      body {
        color: white;
        font-family: Arial, sans-serif;
      }
      .parenthesis-textbox {
        width: 80%;
        height: 40px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.1);
        margin-bottom: 10px;
        font-size: 16px;
        overflow: hidden;
        resize: none;
      	color: white;
      }
      input {
        background-color: green;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 20px auto;
        width: 20%;
        text-align: center;
      }
      input:hover {
        background-color: darkgreen;
      }
      .output {
        width: 100%;
        text-align: center;
        margin: 20px auto;
      	color: white;
      }
      .generate {
        width: 100%;
        text-align: center;
        margin: 20px auto;
      }
      .generated {
        width: 100%;
        text-align: center;
        margin: 20px auto;
      }
      textarea {
        width: 80%;
        height: 200px;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
      h2 {
        margin-top: 80px;
      }
      .gray-prompt {
        color: gray;
      }
    </style>
  </head>
  <body style="background-color: #1a1a1a;">
    <div style="text-align: center;">
      <img src="logo.png" height="500">
      <br>
      <h2>Fill in the madlibs</h2>
    </div>
    <div id="output" class="output"></div>
    <div id="generate" class="generate">
	  <input type="submit" value="Generate" onclick="getResults()">
	</div>
    <div id="generated" class="generated"></div>
    <script>
      const random = Math.floor(Math.random() * 4);
      const input = database[random];
      const matches = input.match(/\(([^)]+)\)/g);
      if (matches) {
        for (let i = 0; i < matches.length; i++) {
          const strippedMatch = matches[i].slice(1, -1);
          const textbox = document.createElement("textarea");
          textbox.type = "text";
          textbox.classList.add("parenthesis-textbox");
          textbox.placeholder = strippedMatch;
          document.querySelector("#output").appendChild(textbox);
        }
      };
      function getResults() {
        let updatedText = input;
        const parenthesisTextboxes = document.getElementsByClassName(
          "parenthesis-textbox"
        );
        for (let i = 0; i < parenthesisTextboxes.length; i++) {
          const textboxValue = parenthesisTextboxes[i].value;
          updatedText = updatedText.replace(
            `(${matches[i].slice(1, -1)})`,
            textboxValue
          );
        };
        const endtextbox = document.createElement("textarea");
        endtextbox.type = "submit";
        endtextbox.classList.add("end-textbox");
        endtextbox.value = updatedText;
        document.querySelector("#generated").appendChild(endtextbox);
            
//          inputText.value = updatedText;
      };
      var numbers = "1,2,3,4,5";
      var read = 4;

      var numberArray = numbers.split(",");

      if (numberArray.includes(read.toString())) {
        console.log("Match found");
      } else {
        console.log("No match found");
      };
      // Get the item that was viewed
      var item = "item1";

      // Store the item in local storage
      localStorage.setItem("lastViewedItem", item);
    </script>
  </body>
</html>

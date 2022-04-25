function getRandomInt() {
  return Math.floor(Math.random() * 82) + 1;
}

const init = () => {
  // Get list
  const list = document.getElementById("list");
  let listID = 0;

  // Get addbtn
  const addbtn = document.getElementById("addbtn");
  // Add onclick event
  addbtn.onclick = async function () {
    console.log("Add new item");
    try {
      const character = await (
        await fetch(`https://swapi.dev/api/people/${getRandomInt()}/`, {
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      // Generate ID from list length
      const id = listID++;
      // New li item
      const li = document.createElement("li");
      li.style =
        "padding: 1rem; border-bottom: 2px dashed black;display: flex; justify-content: space-between;align-items: center;";
      // item tagging
      li.setAttribute("id", `element-${id}`);
      // Inner text
      if (!character.name) {
        alert("Invalid response from server");
        return;
      }
      li.appendChild(document.createTextNode(`${character.name}`));
      // li.appendChild(document.createTextNode(`Element ${id}`));
      //Delete btn
      const deletebtn = document.createElement("button");
      deletebtn.style = "padding: 1rem;";
      deletebtn.appendChild(document.createTextNode("Delete"));
      deletebtn.onclick = function () {
        document.getElementById(`element-${id}`).remove();
      };
      li.appendChild(deletebtn);

      // Append to list
      list.appendChild(li);
    } catch (error) {
      console.log(error);
      alert("Something went wrong, couldnt fetch data");
    }
  };
};

window.onload = init;

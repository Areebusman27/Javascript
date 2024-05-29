const users = [
    { id: 1, name: "Watermelon", description: "Garmi ka dushman"},
    { id: 2, name: "Mango", description: "Phallon ka badshah"},
    { id: 3, name: "Peach", description: "Acha fruit hai"},
  ];
  
  function renderCards() {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
  
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
  
      const name = document.createElement("h3");
      name.textContent = user.name;
  
      const description = document.createElement("p");
      description.textContent = user.description;
      description.setAttribute("contenteditable", "true");
      description.addEventListener("blur", () => {
        user.description = description.textContent;
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", () => {
        const index = users.findIndex(u => u.id === user.id);
        if (index > -1) {
          users.splice(index, 1);
          renderCards();
        }
      });
  
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(deleteButton);
  
      cardsContainer.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderCards);
  
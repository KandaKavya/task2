const branchEvents = {
  CSE: ["Hackathon", "AI Workshop", "Web Dev Bootcamp"],
  ECE: ["IoT Challenge", "Circuit Debugging", "Signal Processing"],
  EEE: ["Smart Grid Design", "Power Quiz", "Renewable Energy Talk"],
  MECH: ["CAD Design", "Robotics Demo", "Thermal Engineering Quiz"],
  CIVIL: ["Bridge Building", "AutoCAD Workshop", "Site Planning"],
  METALLURGY: ["Material Testing", "Metallurgy Quiz", "Steel Microstructures"],
  IT: ["App Dev", "Cybersecurity Workshop", "Cloud Computing"]
};

const activitiesSection = document.getElementById('activities');
const branchSelect = document.getElementById('branch');
const eventList = document.getElementById('eventList');

function updateActivities(branch) {
  activitiesSection.innerHTML = '';
  if (branchEvents[branch]) {
    branchEvents[branch].forEach(event => {
      const card = document.createElement('div');
      card.className = 'activity-card';
      card.innerHTML = `
        <h3>${event}</h3>
        <button onclick="addEvent('${event}')">Register</button>
      `;
      activitiesSection.appendChild(card);
    });
  }
}

function addEvent(eventName) {
  const existing = Array.from(eventList.children).some(
    li => li.textContent.includes(eventName)
  );
  if (!existing) {
    const li = document.createElement('li');
    li.innerHTML = `${eventName} <button onclick="removeEvent(this)">Remove</button>`;
    eventList.appendChild(li);
  }
}

function removeEvent(button) {
  button.parentElement.remove();
}

branchSelect.addEventListener('change', (e) => {
  updateActivities(e.target.value);
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const branch = branchSelect.value;
  const year = document.getElementById('year').value;
  const selectedEvents = eventList.getElementsByTagName('li');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !branch || !year) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (selectedEvents.length === 0) {
    alert("Please select at least one event before joining the club.");
    return;
  }

  alert("Successfully registered! Scroll down to manage your events.");
});

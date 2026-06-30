// ================================
// STORY HUB
// ================================

// Get stories
function getStories() {
    return JSON.parse(localStorage.getItem("stories")) || [];
}

// Save stories
function saveStories(stories) {
    localStorage.setItem("stories", JSON.stringify(stories));
}

// ================================
// Publish Story
// ================================

const publishForm = document.querySelector(".publish-form");

if (publishForm) {

    publishForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = publishForm.querySelector("input[type=text]").value;

        const genre = publishForm.querySelector("select").value;

        const description =
            publishForm.querySelector("textarea").value;

        const stories = getStories();

        stories.push({
            id: Date.now(),
            title,
            genre,
            description,
            views: 0,
            likes: 0
        });

        saveStories(stories);

        alert("Story Published!");

        publishForm.reset();

    });

}

// ================================
// Load Stories
// ================================

const storyGrid = document.querySelector(".story-grid");

if (storyGrid) {

    const stories = getStories();

    storyGrid.innerHTML = "";

    stories.forEach(story => {

        storyGrid.innerHTML += `

        <div class="story-card">

            <div class="story-content">

                <span class="genre">${story.genre}</span>

                <h2>${story.title}</h2>

                <p>${story.description}</p>

                <div class="story-info">

                    <span>👁 ${story.views}</span>

                    <span>❤️ ${story.likes}</span>

                </div>

                <a href="story.html" class="read-btn">
                    Read Story
                </a>

            </div>

        </div>

        `;

    });

}
}

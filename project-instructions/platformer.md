# Platformer-neo

### An intro to video game programming featuring HalleBot in a configurable platformer

**Table of Contents**

- [Before You Start](#before-you-start)
  - [Objective](#objective)
  - [Requirements and Grading](#requirements-and-grading)
  - [Functions Recap](#functions-recap)
- [Lesson Steps](#lesson-steps)
  - [Work Flow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0 : Preview Your Site](#todo-0-preview-your-site-with-live-server)
  - [TODO 1: Enable the Grid](#todo-1-enable-the-grid)
  - [TODO 2: Platforms](#todo-2-add-platforms)
  - [TODO 3: Collectables](#todo-3-add-collectables)
  - [TODO 4: Cannons](#todo-4-add-cannons)
  - [TODO 5: Make your level challenging](#todo-5-make-your-level-challenging)
  - [TODO 6: Go Live](#todo-6-go-live)

<br><br>

# Before You Start

## **Objective**

Get ready to bring your game design ideas to life! 🎮 In this project, you’ll design a playable level for a platformer game, using **JavaScript functions** to place platforms, collectables, and cannons that make gameplay exciting and challenging.

You’ll be learning to:

- **Call functions** with specific values (arguments) to position game elements precisely.
- **Think like a game designer** as you create a level that’s both fun and challenging for players.

By the end of this project, you’ll have built a custom game level that’s ready for action! Your level will include multiple platforms and collectables, and strategic cannons that keep players on their toes. Let’s get started and make something epic! 🚀

<br><br>

## **Requirements and Grading**

| Requirement                     | Description                                                   | Points |
| ------------------------------- | ------------------------------------------------------------- | ------ |
| **Create at least 5 platforms** | Platforms should be placed strategically throughout the game  | 30     |
| **Add 3 collectables**          | Place collectables at various positions using different types | 30     |
| **Add 3 cannons**               | Place cannons on different sides with varying delays          | 30     |
| **Design a playable level**     | Create a level that’s challenging but achievable              | 10     |

<br><br>

## **Functions Recap**

Functions are reusable blocks of code that perform a specific task. You “call” a function to run the code inside it. Many functions require inputs, known as **_arguments_**, which are the specific values the function uses to perform its task.

---

### Key Terms

<div style="width: 80%; margin: auto;">

| Term              | Definition                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| **Function Call** | Code that runs the function and gives it any necessary inputs (arguments).                             |
| **Arguments**     | The actual values you pass into the function when you call it (e.g., `500` for x in `createPlatform`). |
| **Parameters**    | Placeholders in the function definition that represent the values needed to perform the task.          |

</div>

---

### Example

For example, calling `createPlatform(500, 300, 200, 20);` means:

- **500 and 300** are the x and y coordinates where the platform will appear.
- **200 and 20** are the platform’s width and height.

These numbers are **arguments** passed to the function, matching the **parameters** defined in the function.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

# Lesson Steps

## **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Learn how to follow the steps in this lesson to build and customize your game one step at a time.

---

### Step-by-Step Work Flow

1. 📂 **Open the `platformer.js` file** in your codespace to get started.
   - 🔍 Locate the file tree (the list of files and folders) in the left panel of your codespace.
   - Click the `fsd-projects` folder 📂 in your file tree expand the list of projects.
   - Click on the `platformer` folder 📂 located within the `fsd-projects` folder.
   - Click on the `platformer.js` file. Coding for all steps will be done in this file.
2. **Follow the instructions carefully** for each TODO:

   - Pay attention to where new code should be added.
   - Only code inside the designated areas
     - Make sure all function calls go between the _`ONLY CHANGE BELOW THIS POINT`_ and _`ONLY CHANGE ABOVE THIS POINT`_ comments.

3. 🖥️ **Preview your game regularly using Live Server** to see how your changes affect the game level.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Key Reminders
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      - 📖 Read each step closely before adding any code.<br>
      - 🖥️ Preview frequently to make sure your game is structured the way you would like it.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **After each TODO**, double-check your code to ensure it matches the examples.
- If you encounter issues, **preview your site** using Live Server to troubleshoot.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 0: Preview Your Site with Live Server**

🎯 **Goal:** Preview your site in the browser to see how it looks and behaves as you make changes.

---

### Step-by-Step Instructions

There are two ways to open your project with **Live Server**:

#### **Option 1: Right-Click Method**

1. 📂 **Find the `index.html` file** in the file tree on the left side of your codespace.
2. **Right-click on `index.html`** and select **“Open with Live Server.”**

#### **Option 2: Go Live Button in the Bottom Panel**

1. **Look at the bottom-right corner** of your codespace.
2. **Click the “Go Live” button** to launch Live Server.

<br>

### ✅ **Check Your Work!**

- **After launching Live Server**, your browser should open a new tab with your site.
- By default, Live Server will always load your home page. To view your platormer game:
  - Click the link to your Portfolio page to access your project links.
  - Then navigate to your Platformer project by clicking the Platformer link.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 1: Enable the Grid**

🎯 **Goal:** Enable the grid in your game to see the x and y coordinates in 100-pixel increments.

---

### Step-by-Step Instructions

1. **Uncomment the `toggleGrid` function**

   - **Find the `toggleGrid()` line in your JavaScript file**. You’ll see it has `//` at the beginning, making it inactive.
   - Remove `//` to enable the grid in your game.

2. **Check your game in Live Server**

   - Refresh your game to see a grid appear on the screen, marking x and y positions every 100 pixels.
   - This grid is optional but can be very helpful in placing game items more precisely.

3. **Using Comments to Toggle the Grid**
   - You can easily enable or disable the grid by commenting out the `toggleGrid()` function call.
   - Use the **shortcut** `Ctrl + /` (Windows) or `Cmd + /` (Mac) to quickly add or remove `//` from the beginning of the line.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Use the Grid?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      The grid is a useful guide for precisely placing items in your game. Each gridline marks a 100-pixel increment along the x and y axes, helping you determine specific coordinates. Although it’s not required, it can make designing your level much easier!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server to confirm the grid appears correctly.
- Experiment with adding and removing the grid to see how it affects your ability to place items.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 2:** Add _Platforms_

🎯 **Goal:** Add platforms to your game for the player to jump on and navigate the level.

---

### Step-by-Step Instructions

1. 🔍 **Locate the section in your code** where you can add platforms.

   - Add your code below the comment that says `// TODO 2 - Create Platforms`
   - You’ll be using the `createPlatform` function to set the position and size of each platform.

2. **Understand the Arguments for `createPlatform`**
   - The `createPlatform` function requires several arguments to specify where each platform appears and its dimensions.
   - Refer to the table below to understand each argument’s purpose:

   <div style="width: 80%; margin: auto;">

| Argument | Description                                                             | Example Value        |
| -------- | ----------------------------------------------------------------------- | -------------------- |
| `x`      | x-coordinate of the platform                                            | `500`                |
| `y`      | y-coordinate of the platform                                            | `300`                |
| `width`  | Width of the platform in pixels                                         | `200`                |
| `height` | Height of the platform in pixels                                        | `20`                 |
| `color`  | (Optional) Color of the platform; will default to grey if not specified | `"hotpink"`          |

   </div>

Example function calls:

```javascript
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "red");
```

<br>

3. **Add at least 5 platforms** in your game by calling `createPlatform` with different arguments.
   - **Create a new line for each platform**: To add multiple platforms, you’ll need to call createPlatform separately on a new line for each one. Each platform should have its own line of code with its own specific x, y, width, and height values.
   - Remember, the y-axis is inverted in 2D graphics, so larger `y` values move platforms lower on the screen.

---

### 🎨 Tip: Use Color to Track Your Progress!

As you're adding and positioning platforms, it can be really helpful to change their colors *after* they're in the right place.

This way, you can quickly spot which platforms are already finished and which ones you're still working on. It's a great habit for staying organized while building.

In your `createPlatform()` call, you can change the fill color by updating the last parameter. For example:

```js
createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform
```

> You can leave the color parameter blank to use the default grey color while figuring out the desired position of your platform. Once you’re happy with the placement, change the color to something else to make it clear that it is finished.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Tips for Platform Placement
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      ⚙️ <strong>Use trial and error!</strong> Platforms might not land perfectly on the first try. Adjust the arguments (x, y, width, height) until you’re satisfied with the setup.
      <br><br>
      🪜 <strong>Work from the bottom up</strong>: Place your first platforms near the bottom of the game area. Building upward makes it easier to create a path the player can jump between.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server to see if the platforms appear as expected.
- Make sure you have at least 5 platforms placed at different heights and positions.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 3:** Add _Collectables_

🎯 **Goal:** Add items (collectables) for the player to gather while navigating the game.

---

### Step-by-Step Instructions

1. 🔍 **Locate the section in your code** designated for adding collectables.

   - Use the `createCollectable` function to add items at specific locations on the screen.

2. **Understand the Arguments for `createCollectable`**

   - The `createCollectable` function requires arguments that control the item’s type and position.
   - Refer to the table below for details:

   <div style="width: 80%; margin: auto;">

   | Argument  | Description                                                             | Example Value |
   | --------- | ----------------------------------------------------------------------- | ------------- |
   | `type`    | The type of collectable (e.g., "database", "diamond")                          | `"diamond"`      |
   | `x`       | x-coordinate of the collectable                                         | `200`         |
   | `y`       | y-coordinate of the collectable                                         | `170`         |
   | `gravity` | (Optional) Controls how the item falls; set to `0` if it shouldn’t fall | `0.5`         |
   | `bounce`  | (Optional) Controls how much the item bounces when it lands             | `0.7`         |

   </div>

   **Important**: You can use any of the following values for your `type`: `"database"`, `"diamond"`, `"grace"`, `"kennedi"`, `"max"`, and `"steve"`

   ---

   Example function calls:

   ```javascript
   createCollectable("steve", 1350, 50);
   createCollectable("diamond", 200, 170, 0.5, 0.7);
   ```

<br>

3. **Add at least 3 collectables** at different positions throughout your game. Use different `type` values to add variety.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Tips for Placing Collectables
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      💎 <strong>Experiment with positioning</strong>: Test different x and y values to place items at reachable spots. Adjust as needed so that the collectables are accessible.<br><br>
      🔄 <strong>Use gravity and bounce carefully</strong>: These are optional values. Start with <code>0</code> if you want a stationary item, and increase them slightly to add movement or challenge. Using <code>1</code> for both values will make your object bounce to the same height each time.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server to ensure the collectables appear where you expect them.
- Make sure you have at least 3 collectables, with different types if possible.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 4:** Add _Cannons_

🎯 **Goal:** Add cannons to your game to introduce obstacles for the player.

---

### Step-by-Step Instructions

1. 🔍 **Locate the section in your code** for adding cannons.

   - Use the `createCannon` function to place each cannon along the screen edges.

2. **Understand the Arguments for `createCannon`**

   - The `createCannon` function has arguments for placement and firing speed. Review the table for details:

   <div style="width: 80%; margin: auto;">

   | Argument   | Description                                                     | Example Value |
   | ---------- | --------------------------------------------------------------- | ------------- |
   | `side`     | Which side of the screen to place the cannon (left, right, top) | `"left"`      |
   | `position` | Position along the side (distance from top or left)             | `300`         |
   | `delay`    | Time in milliseconds between shots                              | `2000`        |

   </div>

   **Important**: You can use any of the following string values for your `side`: `"top"`, `"bottom"`, `"left"`, or `"right"`
   
  
   --- 

   Example function calls:

   ```javascript
   createCannon("top", 200, 100);
   createCannon("right", 300, 2000);
   ```

<br>

3. **Add at least 3 cannons** on different sides of the screen. Adjust their positions and delays to vary the difficulty.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Tips for Placing Cannons
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      🔄 <strong>Try different sides:</strong> Place cannons on the left, right, and top to create diverse challenges.<br><br>
      ⏲️ <strong>Adjust delay times:</strong> Faster delays increase difficulty. Start with longer delays and adjust as needed to create the right level of challenge.<br><br>
      🎯 <strong>Position thoughtfully:</strong> Place cannons where they can cover areas the player frequently jumps to.
    </td>
  </tr>
</table>

---

### ✅ **Check Your Work!**

- **Preview your game** in Live Server to make sure the cannons are firing correctly.
- Ensure you have at least 3 cannons placed on different sides with varying delay intervals.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 5:** _Make your level challenging!_

Make sure your game unique and challenging! In order to get full credit your project must be playable! Specifically,

- HalleBot can access all collectables.
- There are platforms of varying heights that require jumping or avoiding obstacles.
- Cannons are placed to create a challenge.

<!-- 4 line breaks between TODOs -->
<br><br><br><br>

## **TODO 6:** *Go Live*

🎯 **Goal:** Push your changes to GitHub and make your platformer game go live.

---

### Step-by-Step Instructions

1. **Ensure the grid is not visible**
   - If you used the grid to help build your game, make sure you disable it before saving your work. The grid is a tool for developers to place items accurately, but it can distract people (or dogs) who are playing your game.
   - To remove the grid, find the `toggleGrid()` function call underneath the `// TODO 1 - Enable the Grid` comment. Add two slashes (`//`) in front of the `toggleGrid` function call to disable that line of code.

2. **Open the terminal in your codespace**
   - If the terminal isn’t visible, click the **Hamburger Menu > Terminal > New Terminal**.

3. **Run the required git commands one by one** in the terminal, pressing enter after each command to run it. Reference the table and comment below for how to run the three commands:

| Command              | Purpose                                                      |
|----------------------|--------------------------------------------------------------|
| `git add .`          | Stages all your changes so Git is aware of them.             |
| `git commit -m "Finalized platformer game"`      | Saves a version of your work with a brief message.           |
| `git push`           | Uploads your committed changes to GitHub, making them live.  |

<br>

4. **Wait a few minutes for the changes to go live at your-username.github.io.**

---

<br>

### ✅ **Check Your Work!**

- Visit the site `your-github-username.github.io` to see your platformer game live on the internet.
  - Make sure to replace the text `"your-github-username"` with your actual github username when entering the URL in your browser.
- Navigate to your Platformer link on your Portfolio page to ensure it is live on the web.
  - You might need to refresh your page for your changes to appear.

<br>

<hr>

<br>

### 🎉🎉🎉 Congratulations! You can now challenge your classmates and friends to beat your customized game! 🎉🎉🎉

### **Bonus Challenges**

1. **Moving Collectable Challenge**:
   - Create a collectable that moves horizontally between two points (100 and 300 pixels)
   - Example: `createCollectable("gem", 200, 100, 0, 1, 100, 300, 2)`
   - The collectable should smoothly move back and forth at a reasonable speed

2. **Moving Platform Challenge**:
   - Design a platform that moves horizontally between two positions
   - Example: `createPlatform(400, 300, 200, 20, "blue", 300, 500, 1)`
   - Make sure the platform is wide enough for HalleBot to land on while moving

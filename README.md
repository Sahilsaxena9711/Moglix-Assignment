# Moglix-Assignment

# Tech Stack
 - React Native
 - React
 - Redux Saga

# Dependencies
- @react-native-community/masked-view
- @react-navigation/bottom-tabs
- @react-navigation/native
- axios
- prop-types
- react
- react-native
- react-native-gesture-handler
- react-native-reanimated
- react-native-safe-area-context
- react-native-screens
- react-native-simple-toast
- react-native-vector-icons
- react-redux
- redux
- redux-devtools-extension
- redux-saga

# Lining Dependencies
 ### iOS
  ```
  cd ios && pod install
  ```
 ### Android
  ```
  react-native link
  ```

# Running App
 - ```
   git clone https://github.com/Sahilsaxena9711/Moglix-Assignment.git
   ```
 - ```
    npm install
   ```
 - ```
    cd ios && pod install && cd ..
   ```
 - ```
    react native link
   ```
- For Android
  ```
  react-native run-android
  ```
- For iOS
  ```
   react-native run-ios
  ```

# Features
 - View Posts fetched from JSONPlaceholder API
 - Create your own posts (After post is created it will be added in the Post List at top)

## Assignment
###### Screens
  - List all posts.
  - Add a post.

 ###### List All Posts
   - Simple screen that lists all the available posts, this can be fetched from any publicly available api. (ex. JSONPlaceholder)
   - Bonus Functionality If you could add a manual frontend filtration logic that'll search through the title of the numerous posts.
   
 ###### Add a Post
   - Since you can't post to the actual public api's just making the post request and showing a success message for it, works. So, You'll have a text box and a        submit button for me to make a post with.

- If you are ahead of the deadline and can add any other functionality that you think you'd like to add, you can, just make sure you list it in the Readme.

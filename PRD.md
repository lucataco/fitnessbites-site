# FitnessBites: Product Requirements Document

## 1. Product Overview

### 1.1 Product Vision
FitnessBites is a mobile application designed to provide quick, bite-sized workouts for users on the go. The app aims to eliminate barriers to fitness by offering convenient, accessible, and randomized exercise suggestions that can be performed anywhere with minimal equipment.

### 1.2 Target Audience
- Busy professionals with limited time for full workouts
- Beginners to fitness who want simple, approachable exercises
- Travelers or people without gym access
- Anyone looking to incorporate more movement throughout their day

## 2. Current Features

### 2.1 Core Functionality
- **Onboarding Process**: Multi-step user introduction collecting name, date of birth, and fitness level
- **Personalized Exercise Selection**: Exercises automatically filtered based on user's fitness level
  - **Beginner**: Arm circles, squats, wall push-ups, march in place, plank on knees
  - **Intermediate**: Jumping jacks, jog in place, plank, push-up on knees, squats
  - **Advanced**: High knees, side plank, push-ups, mountain climbers, lunges
- **Difficulty Level Selection**: Users can customize workout intensity (beginner, intermediate, advanced)
- **Random Exercise Generation**: Quick, randomly generated exercise "bites" with rep counts or lengths of time, appropriate to the difficulty level.
- **Exercise History**: Tracking of completed and skipped exercises with timestamps
- **Navigation System**: Tab-based navigation for moving between screens
- **Visual Feedback**: Dynamic background colors that change with each new exercise
- **Reminder Notifications**: User can select when to be reminded and when not to be disturbed.
- **Persistent Settings**: User preferences are saved using AsyncStorage

### 2.2 User Interface
- Clean, minimalist design with straightforward navigation
- Initial onboarding sequence with multiple steps
- Main tab-based navigation with Home, History, FAQ, and Settings screens
- Home screen with prominent "Get a snack" button and exercise display
- Settings screen for adjusting fitness level and configuring notifications
- History screen showing completed and skipped exercises with filtering options
- FAQ screen with information about the app

## 3. Technical Specifications

### 3.1 Platform & Device Support
- **Mobile Platform**: iOS and Android via React Native/Expo
- **Screen Sizes**: Support for standard smartphone and tablet dimensions
- **Offline Capability**: Core functionality works without internet connection

### 3.2 Technology Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **State Management**: React Context API and Hooks (useState, useEffect)
- **Data Persistence**: AsyncStorage
- **UI Components**: Native React Native components and Expo vector icons

## 4. User Stories & Flows

### 4.1 Core User Stories
1. As a new user, I want to be properly onboarded with personalized information so the app can better meet my needs.
2. As a user, I want to see exercises tailored to my fitness level so I can work out effectively and safely.
3. As a user, I want to set my difficulty level so the exercises match my fitness capabilities.
4. As a user, I want to receive random exercise suggestions so I can vary my workouts.
5. As a user, I want to track my exercise history to see my activity over time.
6. As a user, I want the app to remember my preferences so I don't need to set them each time.
7. As a user, I want access to FAQs so I can learn more about the app's approach to fitness.
8. As a user, I want to use a timer for exercises that are time based: arm circles, march in place, plank on knees, jog in place, plank, side plank
9. As a user, I want to use reps for exercises that are counted as a set: squats, wall push-ups, jumping jacks, push-up on knees, squats, high knees, push-ups, mountain climbers, lunges.
10. As a user, I want to be reminded to exercises either every 30 minutes, every one hour, or every two hours. I want to be able to determined a time period where I am not to be reminded aka do-not-disturb. 

### 4.2 Primary User Flow
1. User opens app for the first time
2. User completes onboarding process:
   - Views welcome screen ("Welcome to Fitness Bites")
   - Enters name ("What should we call you?")
   - Provides date of birth
   - Selects fitness level (beginner, intermediate, or advanced)
   - Selects how often to be reminded
   - Selects when is do-not-disturb
   - Sees confirmation message ("Great, let's go!")
3. User arrives at the homepage with a prominent "Get a snack" button
4. User taps "Get a snack" button to receive a random exercise appropriate for their fitness level
   - Exercises are randomly selected from the pool of exercises matching their difficulty level
   - Beginner users receive exercises like arm circles, squats, wall push-ups, etc.
   - Intermediate users receive exercises like jumping jacks, jog in place, plank, etc.
   - Advanced users receive exercises like high knees, side plank, push-ups, etc.
5. User is shown a random exercise with a random rep count (1-20) or when a appropriate a timer (10-30 seconds)
6. User can mark the exercise as completed or skip to a new one
7. User can view their exercise history in the History tab
8. User can adjust settings (fitness level) in the Settings tab
9. User can access FAQs in the FAQ tab

## 5. Technical Requirements

### 5.1 Performance Requirements
- App launch time under 1 second
- Smooth transitions between screens
- Minimal memory footprint
- Exercise generation response time under 0.2 seconds

### 5.2 Security Requirements
- Secure storage of user preferences
- Privacy-focused design (minimal data collection)

### 5.3 Scalability Considerations
- Architecture that supports future user account implementation
- Database design that can accommodate expanding exercise library
- Component structure that allows for new feature modules

## 6. Constraints & Assumptions

### 6.1 Constraints
- Current exercise database is limited to predefined sets based on fitness levels
- User data (name, DOB, fitness level, exercise history) is stored locally without cloud backup
- No user authentication system currently implemented
- Limited offline functionality

### 6.2 Assumptions
- Users have basic knowledge of common exercises
- Users can self-assess appropriate difficulty levels
- Random exercise selection is sufficient for effective workouts
- Simple UI is preferred over complex features

## 7. Appendix

### 7.1 Glossary
- **Onboarding**: Initial setup process for new users
- **Level**: Difficulty setting for workouts (beginner, intermediate, advanced)
- **Bites**: Individual exercise suggestions with rep counts
- **Snack**: Internal term for the generated exercise + rep combination
- **Exercise History**: Record of completed and skipped exercises
- **Notification Reminder**: When should a user be reminded to exercises, while respecting a do-not-disturb period. 

### 7.2 References
- Exercise selection based on general fitness principles
- UI design follows Expo/React Native best practices

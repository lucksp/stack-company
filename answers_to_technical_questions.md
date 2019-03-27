#### How long did you spend on the code challenge?

- Approximately 10 hours.

#### What would you add to your solution if you had more time? If you didn't spend much time on the code challenge then use this as an opportunity to explain what you would add.

- I tried using a Form library for the first time (Formik). I am not familiar with it and thought it would help save time. In the end I spent a lot of time learning its API options, trial-error due to lack of proper documention (IMO). Therefore, if I had more time &/or used it better, I would have just made my own validation of the forms.
- Additionally, I would have done more styling with better UX.

#### What was the most useful feature that was added to the latest version of a language you used?

- Arrow functions or destructuring

`// Please include a snippet of code that shows how you've used it.`

```
// Arrow function simple examples:

// Function receives property and returns value without "return" or "{}"
const fieldId = field => `field-${field}`;

// scoping
// in this case the "this" keyword is not referencing to inside the scope of forEach, but actually refers to the parent.  Very useful.
Object.keys(passedFields).forEach(item => {
    return (initialItems[item] = "");
});

// Destructuring

// takes exisitng data and extracts them to variables
const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

```

#### How would you track down a performance issue in production? Have you ever had to do this?

- If by performance, you mean "bugs" then yes. I usually first ask 1) how to reproduce it, and 2) are there screen shots for verification. Once I can reproduce it, I check console errors. I basically work backwards. Put breakpoints in and see why the error occurrs. Is it a missing parameter? Unexpected data structure? Then I verify the source that called this through the dev tools call stack. In the event the callstak is not avilable, and the method is used by multiple components, I try to verify the scope of what calls it to narrow down where it came from.

#### Please describe yourself using JSON.

```
let me = [
    {
        name: "Philip Lucks",
        age: 38,
        location: "Denver, CO",
        originally_from: "New York",
        hasKids: true,
        siblings: {
            brother: 0,
            sister: 1
        },
        whenNotCoding: [
            "mountain biking",
            "cooking",
            "travel",
            "snowboarding",
            "live music",
            "photography",
            "chasing kid"
        ],
        favorites: {
            destination: "Japan",
            beer: "Stone IPA",
            whiskey: "Peach Street",
            town: "Crested Butte",
            baseball_team: "Rockies",
            football_team: "Giants",
            tv_show: "Breaking Bad",
            movie: "Space Balls",
            spirit_animal: "George Costanza",
            dish: "chicken wings from Pok Pok"
        },
        ifNotDeveloper: {
            would: "start a bike shop-brewery"
        }
    }
];
```

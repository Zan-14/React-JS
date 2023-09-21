*Learning portals on React
*Session 22 REACT JS PART 2 video (last: 1:12:30)

*Remember about ternary opearator
{const = expression ? true : false} or 
variable = Expression1 ? Expression2(true) : Expression3(false);

*How to use portals and how it works?
1. How to use portals
    - First, we need to import a syntax on the App.jsx
    import { createPortal } from 'react-dom';

    - Second, create useState, for example:
    const [isActive, setIsActive] = useState(false);

    - Third, we want to add a new element to the App.jsx if we click a button, then we can type this:

        *first section
        <button
                onClick={() => setIsActive(!isActive)}
                className="This is for styling purposes"
            >
                Press to add paragraph
        </button>

        *second section
        {isActive
        ? createPortal(
            <div className="text-center underline font-bold">
                <p>This paragraph is generated outside the div root</p>
            </div>,
            document.body
            )
        : null}

2. How it works:
    The first section is creating a button with addEventListener click or onClick in React. Use the state but the value will switch if the button is clicked.

    Second section is creating the effect of the click. We want to add a new div with paragraph in it.

    Use ternary operator (recommend) to code that and use createPortal() or use if else statement. When the button is clicked, the value of isActive will be true. So we place the createPortal() at the left (true). Inside it, we could add an imported components or just add a new element like above. Don't forget to add document.body so that the result will show inside the <body> and below the <div id="root">.

*The goal of using portals:
- To create an element that will be rendered outside the default parent component, in this case is the <div id="root">. So the new element will be rendered as a new element below the <div id="root">

*Where we usually use portals
    - Modal (a message box that is displayed on top of other elements or overlay on the screen)
    - Pop-up dialog
    - Loading Screen
Of course we can just add the new element inside the <div id="root"> and edit the style so that the element will be on top of other elements. But the purpose of using portals is to put the new element outside the <div id="root">
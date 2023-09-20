*REACT JS PART 2*

Topic : 
1. Component Lifecycle
2. Rendering List and Portals


*Pro and Cons from reusable components:

1. Pro
    - Can be used as template, for example: styling format, component like buttons (including the function of the button), etc.

2. Cons
    - If the component  has same format but different data each time it is rendered, there will be many conditions stacked.
    This will create too many props on one reusable component.
    Example: Cards with different image, different color, different text/content.
Solution:
    - Its ok to create a component that only we use once event though the format is similar with other components. This will avoid too many props on a component.
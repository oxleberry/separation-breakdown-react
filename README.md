### Separation Breakdown Preview Page
[http://www.oxleberry.com/interactive/screenprints](http://www.oxleberry.com/interactive/screenprints/hrb/sp0.html)

### Page Description

Separation Breakdown is a page that visualizes the color separation process for a screen printed design. Click on each color to examine what each plate will look like. Also, the order in which the buttons are pressed will determine the print order displayed on the right hand side. This site is based on an actual screen-printed color separations.

### Dev Description

This page has been refactored using React. <br />
Original version used jQuery to handle button interactions. <br />
Now refactored with React, this page has been broken up into smaller components to handle displaying updates based on user interactions.

### App Component Architecture

                    Index
                       |
                       |
              - - - - App - - - -
            /          |          \
          /            |           \
       Intro      SideBySide      Overview
                       |
                   _ _ | _ _ _
                 /             \
                /               \
         InkButtonList     ScreenImageList    -- (hold 2 styles to control the images displayed)
                |                |                • print-image-list (screenprint breakdown view)
                |                |                • bitmap-image-list (halftone closeup view)
           InkButton        ScreenImage


```JS
------------------- Installation-and-first-steps + How-to-write-a-component --------------------

1-6 , 9 (class) Person                      Component
7-8             Counter                     Component
11/1            SynchronizedTextBoxes       Component
11/2            TimeInitConverter           Component
11/3            GuessingNumberGame          Component
11/4            ChooseColor                 Component
11/5            ChooseColors                Component

------------------------------- Organize-components-on-the-page --------------------------------

12              CounterDisplayMax           Component
13              SelectableList              Component
14              CounterDisplayMaxColor      Component
15              SelectedCountryAndCity      Component - Genery by component 'SelectedOptions' | Not genery
16/1            CatchTheRedGame             Component
16/2            FilterItemsFromAList        Component
16/3            FormWithThreePages          Component

--------------------------------- What-else-does-component-do ----------------------------------

17              CheckableList               Component - List and key
18              CheckableListWithDelete     Component - List and key
19              SortableTable               Component - With custom hook | Without
21              MultiSelectAndDeleteList    Component - With useRef
22/1            InputFocusSwitch            Component - With useRef
22/2            FormsWithConfirmPassword    Component - With useRef | With useState
23              Title                       Component - With useEffect
24              Timer                       Component - With useEffect
25              starwarsWithServerAPI       Component - With useEffect
26              youtubeAPI                  Component - With useEffect & useRef
27/1            ViemoPlayerAPI              Component - With useEffect & useRef
27/2            filmsWithServerAPI          Component - With useEffect
27/3            starwarsAndFilmsTogether    Component - With useEffect with useRemoteData Custom hook
28              classComponentLifecycle     Component - 01_component_will_unmount - clear Timer
                                                        02_component_did_mount - flatpickr()
                                                        03_get_derived_state_from_props - TextBox
                                                        04_component_did_update - onYouTubeIframeAPI
                                                        05_component_did_catch - Bomb

------------------------------- Code-sharing-between-components --------------------------------

29              useTimer,useInterval        Component - With custom hook
30              WithClock                   Component - With Higher order component
31              FilteredList,CheckableList  Component - With render props
32              FormsContainerWith4Pages    Component - With react children
33/1            Carousel * 4 versions       Component - With react children
33/2            useRemoteData * 2 versions  Component - With custom hook

---------------------------- Performance-in-the-React-application ------------------------------

34              ColorSelector               Component - Render count
35              ColorSelector,fiver         Component - With React.memo
36              ColorSelector,fiver         Component - With React.memo && useCallBack
37              Counter                     Component - With React.memo && useCallBack
```
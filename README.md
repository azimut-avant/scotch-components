# @scotch/scotch-components
Scotch is our internal collection of libraries used for frontend development. 
In this repository we publish some components which might be useful as an extension
for awesome **@radix-ui** and **@shadcn/ui**.

> Out desire is not implementation of a complete library, but just presentation of some components which might 
> be useful for anyone else.

# Components
| Name      | Description                        |
|-----------|------------------------------------|
| Chip      | Similar to badge, but with actions |
| ChipList  | A set of chips                     |
| ChipInput | An input which allows to add chips |
| Select | Simple selection component |
| SearchSelect | Select with search input |
| MultiSelect | Selection of multiple elements |
| SearchMultiSelect | Selection of multiple elements with input|
| AutoComplete | Search with autocomplete |
| ImageGallery | A component which implements gallery of images with preview |

# References
This repository is not meant to be a "yet another components library".
We strongly rely on radix-ui and shadcn/ui and shall not implement components
covered by these libraries - until their implementations do not restrict demanded functionality.

Here we present a list of widgets/components we are not going to implement (for now):

| Name                  | Description                                  | Link                                                                                                                                             |
|-----------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Pagination            | Widget to control pages                      | [react-paginate](https://github.com/AdeleD/react-paginate)                                                                                       |
| Breadcrumbs           | Navigation steps                             | [shadcn/ui](https://ui.shadcn.com/docs/components/breadcrumb)                                                                                    |
| Button                | Widget to run some action                    | [shdacn/ui](https://ui.shadcn.com/docs/components/button)                                                                                        |
| Calendar              | Date choices                                 | [shadcn/ui](https://ui.shadcn.com/docs/components/calendar)                                                                                      |
| Checkbox              | Boolean-based selection                      | [radix-ui](https://www.radix-ui.com/primitives/docs/components/checkbox) / [shadcn/ui](https://ui.shadcn.com/docs/components/checkbox)           |
| DropdownMenu          | Static selection                             | [radix-ui](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) / [shadcn/ui](https://ui.shadcn.com/docs/components/dropdown-menu) | 
| Input                 | String input                                 | [shadcn/ui](https://ui.shadcn.com/docs/components/input)                                                                                         |
| MenuBar               | Bar with items for navigation                | [radix-ui](https://www.radix-ui.com/primitives/docs/components/menubar) / [shadcn/ui](https://ui.shadcn.com/docs/components/menubar)             |
| Dialog                | Modal menu                                   | [radix-ui](https://www.radix-ui.com/primitives/docs/components/dialog) / [shadcn/ui](https://ui.shadcn.com/docs/components/dialog)               |                                                                          |
| Notifications / Toast | Notification popups                          | [radix-ui](https://www.radix-ui.com/primitives/docs/components/toast) / [shadcn/ui](https://ui.shadcn.com/docs/components/toast)                 |
| Popover               | Small modal window shown near anchor element | [radix-ui](https://www.radix-ui.com/primitives/docs/components/popover) / [shadcn/ui](https://ui.shadcn.com/docs/components/popover)             |
| Radio                 | Group of choices                             | [radix-ui](https://www.radix-ui.com/primitives/docs/components/radio-group) / [shadcn/ui](https://ui.shadcn.com/docs/components/radio-group)     | 
| Switch                | A toggle widget                              | [radix-ui](https://www.radix-ui.com/primitives/docs/components/switch) / [shadcn/ui](https://ui.shadcn.com/docs/components/switch)               |
| Table                 | A html-based table                           | [shadcn/ui](https://ui.shadcn.com/docs/components/table)                                                                                         | 
| Tabs                  | Set of pages selected with bar of selectors  | [radix-ui](https://www.radix-ui.com/primitives/docs/components/tabs) / [shadcn/ui](https://ui.shadcn.com/docs/components/tabs)                   | 
| Tooltop               | A small notification near some anchor        | [radix-ui](https://www.radix-ui.com/primitives/docs/components/tooltip) / [shadcn/ui](https://ui.shadcn.com/docs/components/tooltip)             |


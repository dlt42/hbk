# HBK React Technical Test

## App Structure

### Technologies

The application has been developed using React, Typescript and Tailwind, and it is built and deployed using Vite.

### Error Boundary

The application is wrapped in an error boundary that is used to catch any errors within the application. It provides a button to clear the error which triggers a re-render of the application. 

### Data Provider

The application is wrapped in a data provider that loads the breed data and makes it available via the DataContext. The breed data is used by the Breeds page and the Breed filter on the Cats page.

### Routes and Pages

The application uses a BrowserRouter for handling navigation. The url and labels for navigation are stored in a NavContext. The link data stored in the NavContext is used by the Nav component for rendering the header links. The NavContext could also be used by a menu system.

The Routes defined in the BrowserRouter link to three pages:

- Cats - displays a paginated view of cat images that can be filtered by breed.
- Breeds - displays detailed breed information that can be filtered to find a specific breed.
- Not Found - displayed when an invalid URL is accessed within the application.

The Cats Page is constructed using the following hierarchy of components:
```
    Header
        BreedFilter       
        PaginationControls    
            PaginationButton
                PaginationButtonSVG
    CatList
        CatCard
```

The Breeds Page is constructed using the following hierarchy of components:
```  
    Header
        Filter
    BreedList
        BreedCard
            BreedDetails
                Details
                    DetailsBlock
                    LinksBlock
```
      
## API and validation

### API Request

The application uses an environment file to store the API key and API paths

The application makes use of two API paths 

1. v1/breeds - which returns breed data

2. v1/images/search - which return details of cat images that can be searched and supports pagination parameters

### Validation

The application uses zod to validate API responses and has a zod schema for each API path used

The zod schema is also user to infer the types used to pass response data between components within the application 


## Functionality

The application provides two pages that can be navigated via the header bar

### Breeds Page

The Breeds page allows the user to browse information about various cat breeds

The entry for each breed consists of a name, description and example image

A details section for each entry can be opened to view information, stats and attributes of the breed. Links provided in the data are rendered to open in a new window.

The breeds can be filtered via a text field to find breeds where any of the related information contains the filter term.

The filter field also supports filtering using a label/value pair separated by a colon, for example:

```
'Affection Level: 5'
```

### Cats Page

The cats page displays cat images for details returned by the API.

The images can be navigated using a standard set of pagination controls.

The images can also be filtered by a specific breed.

## Miscellaneous 

Errors in asynchronous processes are not automatically trapped by the error boundary so a useThrowAsyncError hook is used to throw such errors to the error boundary.

## To do

Outstanding items:

1. Add automated tests - unit and end-to-end
2. Change Cats page to ignore data is returned after a subsequent request is made (i.e. repeated click of a button in the pagination control)
3. Remove button on error boundary and replace with a more appropriate mechanism for error handling - perhaps a form to report an error, forced log out or a redirect to a support site.

## Possible Functional Enhancements

The following is a list of additional functionality that could be added to the application:

1. Click a cat image on the Cats page to view the full size image
2. Add the option to set/unset a cat image on the Cats page as a favorite
3. Add a new page to browse favorite cat images 
4. Click a breed on the Breeds page to open a popup that shows a navigable list of facts about the breed 
5. Expand the filtering functionality on the breeds page to include a query builder to specify specific values for details/attributes/stats to filter the breeds by.

## Available Scripts

In the project directory, you can run:


| Script               | Description |
|----------------------|------------------------------------------------------------------------------------------|
| `npm run dev`        | Run the app on a local server with fast reloading using vite at `http://localhost:5173/` |
| `npm run build`      | Build the app with generated files output to the `./build` folder |
| `npm run eslint`     | Run lint checks using es-lint and the associated config, helping to identify bugs and ensure consistency |
| `npm run eslint-fix` | Run lint checks using es-lint and the associated config, applying fixes for identified bugs or changes to ensure consistency (where possible) |
| `npm run typecheck`  | Checks variable types throughout the code |
| `npm run lint`       | Runs the `eslint` and `typecheck` scripts
| `npm run lint-fix`   | Runs the `eslint-fix` and `typecheck` scripts
| `npm run test`       | Runs the unit tests using vitest |
| `npm run format`     | Formats all source code using prettier |

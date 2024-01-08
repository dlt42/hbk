# HBK React Technical Test

## App Structure

### Technologies

The application has been developed using React, Typescript and Tailwind, and it is built and deployed using Vite.

### Error Boundary

The application is wrapped in an error boundary that is used to catch any errors within the application. It provides a button to clear the error which triggers a re-render of the application. This button would be removed in production and replaced with an appropriate mechanism for error handling - perhaps a form to report an error, forced log out or a redirect to a support site.

### Data Provider

The application is wrapped in a data provider that loads the breed data and makes it available via the data context. The breed data is used by the Breeds page and the Breed filter on the Cats page.

### Routes and Pages

The application uses a BrowserRouter for handling navigation. The url and labels for navigation are stored in a NavContext. The link data stored in the NavContext is used by the Nav component for rendering the header links. The NavContext could also be used by a menu system.

The Routes defined in the BrowserRouter link to three pages:

- The Cats page - displays a paginated view of cat images that can be filtered by breed.
- The Breeds page - displays detailed breed information that can be filtered to find a specific breed.
- The Not Found page - displayed when an invalid URL is accessed within the application.


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

### Endpoints

1. get breed data

2. get cat images

### Validation



useThrowAsyncError Hook


Possible enhancements

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

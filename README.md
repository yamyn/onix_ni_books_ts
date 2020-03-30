# onix_ni_books_ts

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## get books statistic

### get count of books for one country

```
   curl --location --request GET 'localhost:3000/v1/books' \

```

## migrations

### to start migrations at migrationsScripts directory

```
'npm run migrate up'

```

### returned db stage before migrations

```
'npm run migrate down'

```

### Migrations status

```
'npm run migrate status'

```

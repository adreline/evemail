# Evemail
> Bulk evemails made easy.

![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/adreline/evemail?include_prereleases)
![GitHub repo size](https://img.shields.io/github/repo-size/adreline/evemail)

Evemail is a desktop native app that can send templated evemails in bulk.

## Installation

OS X & Linux:

Coming soon

Windows:

Grab an installer or portable version from the [releases](https://github.com/adreline/evemail/releases) list

## Usage example

This app is aimed at eve online corporation managers and seeks to make it easier to send multiple mails to the corporation members, through the use of templates.

## Development setup

The app is self-contained, first pull the repo

```sh
git clone https://github.com/adreline/evemail.git
```

install dependencies

```sh
cd evemail
npm i --dev
```

install dependencies from the esi and esi-meta packages

```sh
cd esi/eve-esi
npm i
cd ../eve-esi-meta
npm i
```

run the app

```sh
npm run start
```

package the app

```sh
npm run make
```

## Release History

* 0.8.1
    * The first proper release

## Meta

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/adreline/evemail/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

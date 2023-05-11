# Quickdraft
> Bulk evemails made easy.

![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/adreline/quickdraft?include_prereleases)
![GitHub repo size](https://img.shields.io/github/repo-size/adreline/quickdraft)

Quickdraft simplifies the process of mail communication for the video game EVE Online by providing customizable template options and corporation members listings within a clean interface designed specifically with corporation managers in mind.

## Installation

OS X & Linux:

Coming soon

Windows:

Grab an installer or portable version from the [releases](https://github.com/adreline/quickdraft/releases) list

## Development setup

First, pull the repo

```sh
git clone https://github.com/adreline/quickdraft.git
```

install dependencies

```sh
cd quickdraft
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

Distributed under the GNU General Public License (GPL). See ``LICENSE`` for more information.

[https://github.com/adreline/quickdraft](https://github.com/adreline/quickdraft)

## Contributing

1. Fork it (<https://github.com/adreline/quickdraft/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

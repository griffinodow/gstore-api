[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <h3 align="center">G-Store API</h3>
  <p align="center">
    A REST API for G-Store
    <br />
    <a href="https://github.com/griffinodow/gstore-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://g-store.griffindow.com">View Website</a>
    ·
    <a href="https://github.com/griffinodow/gstore-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/griffinodow/gstore-api/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#environment">Environment</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a REST API for purchasing products on a demo store for my portfolio.

### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [SquareSDK](https://squareup.com/ca/en)
* [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->
## Getting Started

This project is meant to run inside a Docker container for easy deployment. The intended experience is available at [g-store.griffindow.com](https://g-store.griffindow.com/)

### Prerequisites

Install Docker for your desired platform.

### Environment

For easy configuration the Docker container expects the follow environment variables to be set for configuration. Environment variables can be passed to Docker with the -e flag.
| Entry | Environment Variable |
| --- | --- |
| Square Access Token | GS_SQUARE_ACCESS_TOKEN |

### Installation

Deploy the container with the following command.

```bash
docker run -p 4000:80 griffinodow/gstore-api
```

This will allow API requests to be sent to: http://localhost:4000/


<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/griffinodow/gstore-api/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/griffinodow/gstore-api.svg?style=for-the-badge
[contributors-url]: https://github.com/griffinodow/gstore-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/griffinodow/gstore-api.svg?style=for-the-badge
[forks-url]: https://github.com/griffinodow/gstore-api/network/members
[stars-shield]: https://img.shields.io/github/stars/griffinodow/gstore-api.svg?style=for-the-badge
[stars-url]: https://github.com/griffinodow/gstore-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/griffinodow/gstore-api.svg?style=for-the-badge
[issues-url]: https://github.com/griffinodow/gstore-api/issues
[license-shield]: https://img.shields.io/github/license/griffinodow/gstore-api.svg?style=for-the-badge
[license-url]: https://github.com/griffinodow/gstore-api/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/griffinodow
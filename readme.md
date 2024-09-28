# Hackmotion Test Project

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [WordPress Setup](#wordpress-setup)
- [Troubleshooting](#troubleshooting)

## Tech Stack

This project utilizes a modern and robust tech stack to ensure optimal performance, maintainability, and developer experience:

- **Next.js**: A React framework that enables server-side rendering (SSR) and provides excellent SEO support.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **WordPress**: A popular content management system (CMS) used as a headless backend.
- **MySQL**: The database system used by WordPress to store content and configuration.
- **SQLite**: A lightweight database used for analytics purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Git
- Docker and Docker Compose
- Node.js and npm

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:

   ```
   git clone https://github.com/real-mzhs/hackmotion-test-project.git
   ```

2. Navigate to the project directory:

   ```
   cd hackmotion-test-project\frontend
   ```

3. Generate Prisma Client

   ```
   npx prisma generate
   ```

4. Start the Docker containers:

   ```
   docker-compose up -d
   ```

5. Once the containers are up and running, you can access the WordPress setup at:
   ```
   http://localhost:8080/wp-admin/
   ```

## WordPress Setup

To set up WordPress and import the provided content:

1. Navigate to `http://localhost:8080/wp-admin/` in your web browser.

2. Complete the WordPress installation process by following the on-screen instructions.

3. After logging in to the WordPress admin panel, go to the "Plugins" section.

4. Install and activate the following plugin:

   - All in One WP Migration

5. Once activated, select the "All in One WP Migration" plugin and choose the "Import" option.

6. Upload the provided WordPress file named `hackmotion.wpress`.

7. Follow the prompts to complete the import process.

8. Save the permalinks structure.

After completing these steps, your WordPress site should be populated with the imported content.

You will then be required to login to the WordPress admin panel using the provided credentials:
username: `hackmotion`
password: `hackmotion-password-123`

The Next.js frontend of your application should now be accessible at:

```
http://localhost:3000/
```

## Troubleshooting

If you encounter any issues during setup or runtime:

- Ensure all required ports (3000, 8080) are free and not being used by other applications.
- Check Docker logs for any error messages:
  ```
  docker-compose logs
  ```
- Verify that all containers are running:
  ```
  docker-compose ps
  ```

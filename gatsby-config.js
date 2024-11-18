/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Zemliaky`,
    description: `Решаем земельные вопросы, Подготавливаем схемы КПТ, Оцениваем землю перед покупкой, Помогаем получить землю от государства, Консультируем по земельным вопросам, Решаем земельные вопросы`,
    author: `Ivan Shumilov`,
    siteUrl: `https://zemliaky.ru/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/favicon64.png`,
      },
    },
  ],
}

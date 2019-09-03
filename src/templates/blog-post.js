import Helmet from 'react-helmet';

<Layout location={this.props.location} title={siteTitle}>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>${siteTitle}</title>
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MTJjNGQyY2EtMTNlZS00YzAyLWFlNDQtMDNlM2UxYzMxMjE3NjM3MDA3MDczMzM5NDAyMzQ"></script>
    </Helmet>
import preact from 'preact';

import Logo from 'components/logo/picture';

import "./styles.sass";

/** @jsx preact.h */

export default class LayoutResources extends preact.Component {

  resource(obj) {
    return <div class={obj.classes} data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-delay={obj.delay} data-aos-anchor-placement="bottom-center">
      <a href={obj.url} target="_blank"><img src={obj.picture} alt={obj.title} title={obj.title} style={obj.styles} /></a>
    </div>
  }

  resources(config) {
    return {
      pools: config.pools.map(p => {
        p.classes = "is-pools grayscale"
        return this.resource(p)
      }),
      exchanges: config.exchanges.map(p => {
        p.classes = "is-exchanges grayscale"
        return this.resource(p)
      }),
      services: config.services.map(p => {
        p.classes = "is-services grayscale"
        return this.resource(p)
      }),
    }
  }

  render(props, state) {
    const {config} = props;
    const resources = this.resources(config);
    return <section class="is-resources">
      <div class="container">
        <div class="has-text-centered"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            RESOURCES
          </h3>
        </div>
        <div class="columns has-text-centered"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column is-one-third">
            <h4 class="title is-4">POOLS</h4>
            {resources.pools}
          </div>
          <div class="column is-one-third"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            <h4 class="title is-4">EXCHANGES</h4>
            {resources.exchanges}
          </div>
          <div class="column is-one-third"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            <h4 class="title is-4">SERVICES</h4>
            {resources.services}
          </div>
        </div>
      </div>
    </section>;
  }
}
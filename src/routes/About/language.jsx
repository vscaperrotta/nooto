
import PortalMessage from 'Utils/PortalMessage';

const messages = {
  title: <PortalMessage
    id='t.about.title'
  />,
  content1: (param) => <PortalMessage
    id='t.about.content.1'
    values={{ param: param }}
  />,
  content2: <PortalMessage
    id='t.about.content.2'
  />,
  content3: (param) => <PortalMessage
    id='t.about.content.3'
    values={{ param: param }}
  />,
  scrivilaLabel: <PortalMessage
    id='t.about.scrivila.label'
  />,
  scrivilaHref: <PortalMessage
    id='t.about.scrivila.href'
  />,
  iconsLabel: <PortalMessage
    id='t.about.icons.label'
  />,
  iconHref: <PortalMessage
    id='t.about.icons.href'
  />,
  lastUpdated: <PortalMessage
    id='t.about.lastUpdated'
  />,
  release: <PortalMessage
    id='t.about.release'
  />,
};

export default messages;
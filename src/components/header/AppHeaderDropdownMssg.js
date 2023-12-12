import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeOpen } from '@coreui/icons'

import avatar4 from './../../assets/images/avatars/4.jpg'
import avatar5 from './../../assets/images/avatars/5.jpg'
import avatar6 from './../../assets/images/avatars/6.jpg'
import avatar7 from './../../assets/images/avatars/7.jpg'

const AppHeaderDropdownMssg = () => {
  const { t } = useTranslation()
  const itemsCount = 4
  return (
    <CDropdown className="d-none d-md-flex" variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <CIcon icon={cilEnvelopeOpen} size="lg" className="my-1 mx-2" />
        <CBadge
          shape="rounded-pill"
          color="info-gradient"
          className="position-absolute top-0 end-0"
        >
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold rounded-top">
          {t('messagesCounter', { counter: itemsCount })}
        </CDropdownHeader>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 me-3 float-start">
              <CAvatar src={avatar7} status="success" />
            </div>
            <div>
              <small className="text-body-secondary">John Doe</small>
              <small className="text-body-secondary float-end mt-1">Just now</small>
            </div>
            <div className="text-truncate font-weight-bold">
              <span className="fa fa-exclamation text-danger"></span> Important message
            </div>
            <div className="small text-body-secondary text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 me-3 float-start">
              <CAvatar src={avatar6} status="warning" />
            </div>
            <div>
              <small className="text-body-secondary">Jane Dovve</small>
              <small className="text-body-secondary float-end mt-1">5 minutes ago</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-body-secondary text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 me-3 float-start">
              <CAvatar src={avatar5} status="danger" />
            </div>
            <div>
              <small className="text-body-secondary">Janet Doe</small>
              <small className="text-body-secondary float-end mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-body-secondary text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 me-3 float-start">
              <CAvatar src={avatar4} status="info" />
            </div>
            <div>
              <small className="text-body-secondary">Joe Doe</small>
              <small className="text-body-secondary float-end mt-1">4:03 AM</small>
            </div>
            <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <div className="small text-body-secondary text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem className="text-center fw-semibold border-top">
          {t('viewAllMessages')}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdownMssg

import { Section } from '@/demo/router/routeRecords'

export const components: Section = {
  breadCrumbs: () => import('./BreadCrumbs.vue'),
  button: () => import ('./Buttons.vue'),
  buttonGroup: () => import ('./ButtonGroup.vue'),
  card: () => import ('./Card.vue'),
  code: () => import ('./Code.vue'),
  divider: () => import ('./Divider.vue'),
  emptyState: () => import ('./EmptyState.vue'),
  form: () => import ('./Form.vue'),
  iconButtonMenu: () => import ('./IconButtonMenu.vue'),
  iconText: () => import ('./IconText.vue'),
  keyValue: () => import ('./KeyValue.vue'),
  links: () => import ('./Links.vue'),
  listItems: () => import ('./ListItems.vue'),
  modals: () => import ('./Modals.vue'),
  overflowMenu: () => import ('./OverflowMenu.vue'),
  popOver: () => import ('./PopOver.vue'),
  stepper: () => import ('./Stepper.vue'),
  tab: () => import ('./Tab.vue'),
  table: () => import ('./Table.vue'),
  tags: () => import ('./Tags.vue'),
  toast: () => import ('./Toast.vue'),
  typography: () => import ('./Typography.vue'),
}
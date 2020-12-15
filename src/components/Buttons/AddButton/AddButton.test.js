/* eslint-disable */
import { render } from '@testing-library/react'
import { AddButton } from './AddButton'
import { actions } from '../../../pages/AppActions'

describe('Add button', () => {
  test('It should render', () => {
    const { getByTestId } = render(
      <AddButton onClick={() => actions.addTODO(dispatch, list, 'click')} />
    )
    const addButton = getByTestId('addButton')
    expect(addButton).toBeInTheDocument()
  })
})

import { render, screen, fireEvent} from '@testing-library/react'
import DataTable from './DataTable.jsx'
import '@testing-library/jest-dom'


describe('DataTable component', () => {
  test('renders table with data', () => {
    render(<DataTable />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Daenerys')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();
  });

  test('allow selecting a row via checkbox', () => {
    render(<DataTable />);

    // Получаем все чекбоксы
    const checkboxes = screen.getAllByRole('checkbox');

    // Первый чекбокс - это "select all", второй - первая строка
    const rowCheckbox = checkboxes[1];

    // Убедимся, что чекбокс изначально не выбран
    expect(rowCheckbox).not.toBeChecked();

    // Кликаем по чекбоксу
    fireEvent.click(rowCheckbox);

    // Теперь он должен быть выбран
    expect(rowCheckbox).toBeChecked();
  });
});

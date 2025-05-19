import { render, screen, fireEvent} from '@testing-library/react'
import DataTable from './DataTable.jsx'
import '@testing-library/jest-dom'


describe('DataTable component', () => {
  test('renders table with data', () => {
    render(<DataTable />);

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Daenerys')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Select all rows'})).toBeInTheDocument(); // используем getByRole, чтобы выбрать нужный checkbox по aria-label.
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

  test('shows correct selection count when multiple rows are selected', () => {
    render(<DataTable />);

    // получаем все чекбоксы
    const checkboxes = screen.getAllByRole('checkbox');

    // checkbox[1] - первая строка, checkbox[2] - вторая строка
    fireEvent.click(checkboxes[1]); // выбираем первую строку
    fireEvent.click(checkboxes[2]); // выбираем вторую строку

    // Проверяем, что появилась надпись "2 rows selected"
    expect(screen.getByText('2 rows selected')).toBeInTheDocument();
  });

});

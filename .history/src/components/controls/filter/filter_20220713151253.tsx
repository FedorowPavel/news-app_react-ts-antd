
import { Select } from 'antd';
const FilterComponent = () => {
  const { Option } = Select;

  const handleChange = (value: { value: string}) => {
    console.log(value); 
  };
  return (
    
    <Select onChange={handleChange} defaultValue={{ value: 'popularity'}} style={{ width: '50%' }} >
      <Option value="relevancy">default</Option>
      <Option value="popularity">by popularity</Option>
      <Option value="publishedAt">by date added</Option>
    </Select>
  );
}
export default FilterComponent
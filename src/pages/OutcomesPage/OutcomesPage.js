import ProductSelection from '../../components/ProductSelection/ProductSelection';
import Summary from '../../components/Summary/Summary';
import s from './OutcomesPage.module.css';
import Table from '../../components/Table/Table';

const OutcomesPage = () => {
  return (
    <>
      <div className={s.container}>
        <ProductSelection />

        <Table></Table>

        <Summary />
      </div>
    </>
  );
};

export default OutcomesPage;

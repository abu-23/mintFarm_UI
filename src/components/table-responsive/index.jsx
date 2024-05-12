import {
  Container,
  Details,
  Head,
  HeaderSpan,
  Table,
  TableDetailsSection,
  TableHeadingSection,
  TableRow,
} from "./table.style";

export default function TableResponsive({column, values}) {
  return (
    <Container>
      <Table>
        <TableHeadingSection>
          <TableRow>
            {column.map((column) => (
              <Head>{column.header}</Head>
            ))}
          </TableRow>
        </TableHeadingSection>
        <TableDetailsSection>
          {values.map((value) => (
            <TableRow key={value.id}>
              {column.map((column) => (
                <Details status={value[column.field]}>
                  <HeaderSpan>{column.header}</HeaderSpan> {value[column.field]}
                </Details>
              ))}
            </TableRow>
          ))}
        </TableDetailsSection>
      </Table>
    </Container>
  );
}

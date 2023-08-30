import ContentHeader from "@components/content-header/ContentHeader";
import Card, { CardHeader, CardBody, CardFooter } from "@components/Base/Card";
import Container from "@components/Base/Container";
const Blank = () => {
  return (
    <Container fluid>
      <ContentHeader title="Blank Page" />
      <section className="content">
        <Card color="primary">
          <CardHeader
            title="Titulo do Primary"
            tools={{ minus: true, remove: true }}
          />
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus pariatur qui veritatis aperiam explicabo earum, sint
            sit tempore, ducimus ipsam recusandae repudiandae. Similique velit
            in quasi beatae corrupti voluptatibus voluptate?
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam deleniti magni mollitia laboriosam.
          </CardFooter>
        </Card>
        <Card outline color="primary">
          <CardHeader
            title="Titulo do Card Primary outline"
            tools={{ minus: true, remove: true }}
          />
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus pariatur qui veritatis aperiam explicabo earum, sint
            sit tempore, ducimus ipsam recusandae repudiandae. Similique velit
            in quasi beatae corrupti voluptatibus voluptate?
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam deleniti magni mollitia laboriosam.
          </CardFooter>
        </Card>
        <Card>
          <CardHeader
            title="Titulo do Card"
            tools={{ minus: true, remove: true }}
          />
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus pariatur qui veritatis aperiam explicabo earum, sint
            sit tempore, ducimus ipsam recusandae repudiandae. Similique velit
            in quasi beatae corrupti voluptatibus voluptate?
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam deleniti magni mollitia laboriosam.
          </CardFooter>
        </Card>
      </section>
    </Container>
  );
};

export default Blank;

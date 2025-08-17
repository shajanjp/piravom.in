export default function AttractionsPage({ data }: PageProps<Attraction[]>) {
  return (
    <div className="container mx-auto mt-10">
      <p className="mb-4">
        Piravom is a historic town in the Ernakulam district of Kerala, located
        about 30 km from Kochi. Known for its rich cultural and religious
        heritage, it is home to vibrant festivals such as the Piravom Pally
        Perunnal and Sivarathri at Pazhoor Perumthrikkovil Temple, which attract
        thousands of visitors each year.
      </p>
      <p className="mb-4">
        With a population of around 27,000, Piravom combines tradition with
        progress. Once part of the Vadakkumkoor Kingdom, it later came under
        Travancore before becoming part of modern Kerala. In 2015, Piravom was
        reclassified as a municipality, reflecting its growing importance.
      </p>
      <p>
        Today, Piravom is also included in future plans for the Kochi
        Metropolitan Regional Development Authority, positioning it as a town
        with both cultural depth and urban potential.
      </p>
    </div>
  );
}

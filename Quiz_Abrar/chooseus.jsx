export function ChooseUs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="fw-bold text-center">Why Choose Us?</h2>
                        <p className="text-center text-muted">
                            Discover the Best Place to Stay
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {ListChoose.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4">
                            <Choose item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ListChoose = [
    {
        id: 1,
        title: "Keep it flexible",
        description: "Homes with flexible cancellation make it easy to rethink your booking if your plans change.",
        icon: "bi bi-calendar"
    },
    {
        id: 2,
        title: "Get the amenities you want",
        description: "Hot tubs, pools, BBQs—discover dozens of great extras that fit your needs.",
        icon: "bi bi-backpack2"
    },
    {
        id: 3,
        title: "Read real reviews",
        description: "Find homes you’ll love based on the great experiences of people who’ve stayed there.",
        icon: "bi bi-star-fill"
    },
]

const Choose = ({ item }) => {
    const { title, description, icon } = item;

    return (
        <div className="card h-100">
            <div className="card-body text-center">
                <div className="p-4 mb-3">
                    <i className={`${icon} fs-1 text-primary`}></i>
                </div>
                <h5 className="fw-bold">{title}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    )
}
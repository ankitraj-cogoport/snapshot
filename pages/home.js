import Home from '@/components/Home';

export async function getServerSideProps({ locale }) {
    return {
        props: {
            head: {
                title: 'Home',
            },
        },
    };
}

export default Home;
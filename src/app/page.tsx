import RealTimeMap from '@/components/raktdaan/RealTimeMap';
import DonorPatientConnect from '@/components/raktdaan/DonorPatientConnect';
import EmergencySOS from '@/components/raktdaan/EmergencySOS';
import BlockchainTransparency from '@/components/raktdaan/BlockchainTransparency';
import RewardsRecognition from '@/components/raktdaan/RewardsRecognition';
import CommunityEngagement from '@/components/raktdaan/CommunityEngagement';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-2">
              Rakt Daan
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              Copy of "Team 6 Sapfar" by Anushka Singh
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              A comprehensive blood donation platform connecting donors with patients through 
              real-time availability, emergency alerts, and blockchain transparency.
            </p>
          </div>
        </div>
      </header>

      {/* Features Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Platform Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionizing blood donation through technology, transparency, and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Blood Availability</h3>
            <p className="text-gray-600">A live map to quickly check where blood is available.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Donor–Patient Connect</h3>
            <p className="text-gray-600">Smart matching system to connect patients with nearby donors.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">🆘</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency SOS Feature</h3>
            <p className="text-gray-600">One-tap alert to reach donors and hospitals during emergencies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">🔗</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparency with Blockchain</h3>
            <p className="text-gray-600">Donors can track where their blood goes, ensuring trust and no misuse.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rewards & Recognition</h3>
            <p className="text-gray-600">Donors receive digital certificates, social media shout-outs, and sponsor-backed perks.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <div className="text-red-600 text-3xl mb-3">👥</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Engagement</h3>
            <p className="text-gray-600">Build a youth-driven donor community through awareness and gamification.</p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="space-y-16 pb-16">
        {/* Real-time Blood Availability */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Real-time Blood Availability</h2>
            <p className="text-gray-600">Live tracking of blood availability across hospitals and donation centers</p>
          </div>
          <RealTimeMap />
        </section>

        {/* Donor-Patient Connect */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Smart Donor-Patient Matching</h2>
            <p className="text-gray-600">Intelligent system connecting patients with compatible nearby donors</p>
          </div>
          <DonorPatientConnect />
        </section>

        {/* Emergency SOS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Emergency Alert System</h2>
            <p className="text-gray-600">Instant emergency alerts for critical blood requirements</p>
          </div>
          <EmergencySOS />
        </section>

        {/* Blockchain Transparency */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Blockchain Transparency</h2>
            <p className="text-gray-600">Complete transparency and traceability of blood donations</p>
          </div>
          <BlockchainTransparency />
        </section>

        {/* Rewards & Recognition */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Rewards & Recognition</h2>
            <p className="text-gray-600">Celebrating donors with certificates, social recognition, and exclusive perks</p>
          </div>
          <RewardsRecognition />
        </section>

        {/* Community Engagement */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Community Engagement</h2>
            <p className="text-gray-600">Building a youth-driven community through events and gamification</p>
          </div>
          <CommunityEngagement />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Rakt Daan Community</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Together, we can save lives and build a stronger, more connected community of blood donors. 
              Every donation matters, every donor is a hero.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Become a Donor
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Request Blood
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

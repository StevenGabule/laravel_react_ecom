<?php

use App\Baranggay;
use Illuminate\Database\Seeder;

class BaranggaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $baranggay = [
            ['name' => 'Bagontaas','municipality_id' => 1],
            ['name' => 'Banlag','municipality_id' => 1],
            ['name' => 'Barobo','municipality_id' => 1],
            ['name' => 'Batangan','municipality_id' => 1],
            ['name' => 'Catumbalon','municipality_id' => 1],
            ['name' => 'Colonia','municipality_id' => 1],
            ['name' => 'Concepcion','municipality_id' => 1],
            ['name' => 'Dagat-Kidavao','municipality_id' => 1],
            ['name' => 'Guinoyuran','municipality_id' => 1],
            ['name' => 'Kahapunan','municipality_id' => 1],
            ['name' => 'Laligan','municipality_id' => 1],
            ['name' => 'Lilingayon','municipality_id' => 1],
            ['name' => 'Lourdes','municipality_id' => 1],
            ['name' => 'Lumbayao','municipality_id' => 1],
            ['name' => 'Lumbo','municipality_id' => 1],
            ['name' => 'Lurugan','municipality_id' => 1],
            ['name' => 'Maapag','municipality_id' => 1],
            ['name' => 'Mabuhay','municipality_id' => 1],
            ['name' => 'Mailag','municipality_id' => 1],
            ['name' => 'Mount, Nebo','municipality_id' => 1],
            ['name' => 'Nabago','municipality_id' => 1],
            ['name' => 'Pinatilan','municipality_id' => 1],
            ['name' => 'Poblacion','municipality_id' => 1],
            ['name' => 'San, Carlos','municipality_id' => 1],
            ['name' => 'San, Isidro','municipality_id' => 1],
            ['name' => 'Sinabuagan','municipality_id' => 1],
            ['name' => 'Sinayawan','municipality_id' => 1],
            ['name' => 'Sugod','municipality_id' => 1],
            ['name' => 'Tongantongan','municipality_id' => 1],
            ['name' => 'Tugaya','municipality_id' => 1],
            ['name' => 'Vintar','municipality_id' => 1],
            ['name' => 'Barangay 1', 'municipality_id' => 2],
            ['name' => 'Barangay 2', 'municipality_id' => 2],
            ['name' => 'Barangay 3', 'municipality_id' => 2],
            ['name' => 'Barangay 4', 'municipality_id' => 2],
            ['name' => 'Barangay 5', 'municipality_id' => 2],
            ['name' => 'Barangay 6', 'municipality_id' => 2],
            ['name' => 'Barangay 7', 'municipality_id' => 2],
            ['name' => 'Barangay 8', 'municipality_id' => 2],
            ['name' => 'Barangay 9', 'municipality_id' => 2],
            ['name' => 'Barangay 10 (Impalambong)  ', 'municipality_id' => 2],
            ['name' => 'Barangay 11 (Impalambong)', 'municipality_id' => 2],
            ['name' => 'Aglayan', 'municipality_id' => 2],
            ['name' => 'Apo Macote', 'municipality_id' => 2],
            ['name' => 'Bangcud', 'municipality_id' => 2],
            ['name' => 'Busdi', 'municipality_id' => 2],
            ['name' => 'Cabangahan', 'municipality_id' => 2],
            ['name' => 'Caburacanan', 'municipality_id' => 2],
            ['name' => 'Can-ayan', 'municipality_id' => 2],
            ['name' => 'Capitan Angel', 'municipality_id' => 2],
            ['name' => 'Casisang', 'municipality_id' => 2],
            ['name' => 'Dalwangan', 'municipality_id' => 2],
            ['name' => 'Imbayao', 'municipality_id' => 2],
            ['name' => 'Indalasa', 'municipality_id' => 2],
            ['name' => 'Kalasungay', 'municipality_id' => 2],
            ['name' => 'Kibalabag', 'municipality_id' => 2],
            ['name' => 'Kulaman', 'municipality_id' => 2],
            ['name' => 'Laguitas', 'municipality_id' => 2],
            ['name' => 'Linabo', 'municipality_id' => 2],
            ['name' => 'Magsaysay', 'municipality_id' => 2],
            ['name' => 'Maligaya', 'municipality_id' => 2],
            ['name' => 'Managok', 'municipality_id' => 2],
            ['name' => 'Manalog', 'municipality_id' => 2],
            ['name' => 'Mapayag', 'municipality_id' => 2],
            ['name' => 'Mapulo', 'municipality_id' => 2],
            ['name' => 'Miglamin', 'municipality_id' => 2],
            ['name' => 'Patpat', 'municipality_id' => 2],
            ['name' => 'Saint Peter', 'municipality_id' => 2],
            ['name' => 'San Jose', 'municipality_id' => 2],
            ['name' => 'San Martin', 'municipality_id' => 2],
            ['name' => 'Santo Niño', 'municipality_id' => 2],
            ['name' => 'Silae', 'municipality_id' => 2],
            ['name' => 'Simaya', 'municipality_id' => 2],
            ['name' => 'Sinanglanan', 'municipality_id' => 2],
            ['name' => 'Sumpong', 'municipality_id' => 2],
            ['name' => 'Violeta', 'municipality_id' => 2],
            ['name' => 'Zamboanguita', 'municipality_id' => 2]
        ];


        Baranggay::insert($baranggay);
    }
}

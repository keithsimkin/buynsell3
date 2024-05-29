<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Core\Entities\CustomizeUi;

class ScreenDisplayUiSetting extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "psx_screen_display_ui_settings";

    const id = "id";
    const moduleName = "module_name";
    const key = "key";
    const isShow = "is_show";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\ScreenDisplayUiSettingFactory::new();
    }

    public function coreField(){
        return $this->belongsTo(CoreFieldFilterSetting::class,"key","field_name")->where("is_delete", 0);
    }

    public function customizeField(){
        return $this->belongsTo(CustomizeUi::class,"key","core_keys_id");
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }

}

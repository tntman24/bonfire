  supabaseUrl = "SupaBase URL";
      const supabaseKey = "SupaBase Anon Key";
      const { createClient } = supabase;
      const client = createClient(supabaseUrl, supabaseKey);
      
 const uuid = 'TheSuperBoi';

 // Ensure supabaseClient is properly initialized and available in this scope.
 // e.g., const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

 const { data, error } = await supabaseClient
          .from("profiles")
          .select("BonID, Banned")
          .eq("BonID", uuid)
          .maybeSingle(); // Use maybeSingle() when expecting one or zero rows

        if (error) {
          console.error("Database error:", error); // Log the actual error for debugging
          return alert("Database error (check console)");
        }

        if (!data) {
          alert("UUID not found for the given BonID");
          // Ensure 'roleSelect' element exists in your HTML if you use this line
        }
        
        if (banned) {
          alert('BANNED');
        }



